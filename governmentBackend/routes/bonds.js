var express = require("express");
var router = express.Router();
const staticListOfBonds = require("./staticListOfBonds.json");
process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;

router.get("/", function (req, res, next) {
  res.json(staticListOfBonds);
});

router.post("/buy", async function (req, res, next) {
  const { buyerName, bondId } = req.body;

  // Find the bond that

  // Retrieve information about the two parties
  // Government = Issuer of the Government Bond
  // Buyer = Owner of the Government Bond
  const { governmentHoldingIdentity, buyerHoldingIdentity } =
    await getListOfVirtualNodes(buyerName);

  const issueTokenResponse = await issueTokenOnLedger(
    governmentHoldingIdentity,
    buyerHoldingIdentity
  );

  res.json({ issueTokenResponse });
});

async function getListOfVirtualNodes(buyerName) {
  let governmentHoldingIdentity = undefined;
  let buyerHoldingIdentity = undefined;

  const listOfVirtualNodes = await fetch(
    "https://localhost:8888/api/v1/virtualnode",
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: "Basic YWRtaW46YWRtaW4=",
      },
    }
  )
    .then((response) => response.json())
    .then((data) => {
      return data.virtualNodes;
    })
    .catch((error) => {
      console.error("Error:", error);
    });

  listOfVirtualNodes.map((node) => {
    if (
      node.holdingIdentity.x500Name ===
      "CN=British Government, OU=Test Dept, O=British Government, L=London, C=GB"
    ) {
      governmentHoldingIdentity = node.holdingIdentity;
    }
    if (node.holdingIdentity.x500Name.includes(`CN=${buyerName}`)) {
      buyerHoldingIdentity = node.holdingIdentity;
    }
  });

  return {
    governmentHoldingIdentity,
    buyerHoldingIdentity,
  };
}

async function issueTokenOnLedger(issuer, owner) {
  const requestBody = {
    clientRequestId: "issue-10",
    flowClassName:
      "com.r3.developers.samples.tokens.workflows.issue.IssueGovernmentBondTokensFlow",
    requestBody: {
      symbol: "UKGILT5Y",
      owner: owner.x500Name,
      amount: "5000",
    },
  };

  const issueTokenResponse = await fetch(
    `https://localhost:8888/api/v1/flow/${issuer.shortHash}`,
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: "Basic YWRtaW46YWRtaW4=",
      },
      body: JSON.stringify(requestBody),
    }
  )
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error("Error:", error);
    });

  return issueTokenResponse;
}

module.exports = router;
