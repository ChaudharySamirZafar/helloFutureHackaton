var express = require("express");
var router = express.Router();
const staticListOfBonds = [
  {
    BondID: "GB001",
    Issuer: "British Government",
    Symbol: "UKGILT5Y",
    MaturityDate: "2029-08-13",
    CouponRate: 1.5,
    FaceValue: 5000,
    Currency: "GBP",
    purchased: false,
  },
  {
    BondID: "GB002",
    Issuer: "British Government",
    Symbol: "UKGILT5Y",
    MaturityDate: "2028-06-15",
    CouponRate: 2.0,
    FaceValue: 10000,
    Currency: "GBP",
    purchased: false,
  },
  {
    BondID: "GB003",
    Issuer: "British Government",
    Symbol: "UKGILT5Y",
    MaturityDate: "2030-11-30",
    CouponRate: 1.75,
    FaceValue: 20000,
    Currency: "GBP",
    purchased: false,
  },
  {
    BondID: "GB004",
    Issuer: "British Government",
    Symbol: "UKGILT5Y",
    MaturityDate: "2027-05-01",
    CouponRate: 1.25,
    FaceValue: 15000,
    Currency: "GBP",
    purchased: false,
  },
  {
    BondID: "GB005",
    Issuer: "British Government",
    Symbol: "UKGILT5Y",
    MaturityDate: "2031-09-12",
    CouponRate: 1.6,
    FaceValue: 1000,
    Currency: "GBP",
    purchased: false,
  },
  {
    BondID: "GB006",
    Issuer: "British Government",
    Symbol: "UKGILT5Y",
    MaturityDate: "2026-07-20",
    CouponRate: 2.5,
    FaceValue: 25000,
    Currency: "GBP",
    purchased: false,
  },
  {
    BondID: "GB007",
    Issuer: "British Government",
    Symbol: "UKGILT5Y",
    MaturityDate: "2029-10-01",
    CouponRate: 1.3,
    FaceValue: 40000,
    Currency: "GBP",
    purchased: false,
  },
  {
    BondID: "GB008",
    Issuer: "British Government",
    Symbol: "UKGILT5Y",
    MaturityDate: "2033-02-25",
    CouponRate: 2.0,
    FaceValue: 50000,
    Currency: "GBP",
    purchased: false,
  },
  {
    BondID: "GB009",
    Issuer: "British Government",
    Symbol: "UKGILT5Y",
    MaturityDate: "2027-03-15",
    CouponRate: 1.8,
    FaceValue: 10000,
    Currency: "GBP",
    purchased: false,
  },
  {
    BondID: "GB010",
    Issuer: "British Government",
    Symbol: "UKGILT5Y",
    MaturityDate: "2034-04-10",
    CouponRate: 1.9,
    FaceValue: 75000,
    Currency: "GBP",
    purchased: false,
  },
  {
    BondID: "GB011",
    Issuer: "British Government",
    Symbol: "UKGILT5Y",
    MaturityDate: "2038-12-01",
    CouponRate: 2.5,
    FaceValue: 30000,
    Currency: "GBP",
    purchased: false,
  },
  {
    BondID: "GB012",
    Issuer: "British Government",
    Symbol: "UKGILT5Y",
    MaturityDate: "2031-08-13",
    CouponRate: 2.0,
    FaceValue: 100000,
    Currency: "GBP",
    purchased: false,
  },
  {
    BondID: "GB013",
    Issuer: "British Government",
    Symbol: "UKGILT5Y",
    MaturityDate: "2029-01-01",
    CouponRate: 1.5,
    FaceValue: 15000,
    Currency: "GBP",
    purchased: false,
  },
  {
    BondID: "GB014",
    Issuer: "British Government",
    Symbol: "UKGILT5Y",
    MaturityDate: "2032-09-30",
    CouponRate: 1.7,
    FaceValue: 12000,
    Currency: "GBP",
    purchased: false,
  },
  {
    BondID: "GB015",
    Issuer: "British Government",
    Symbol: "UKGILT5Y",
    MaturityDate: "2026-02-15",
    CouponRate: 1.6,
    FaceValue: 45000,
    Currency: "GBP",
    purchased: false,
  },
  {
    BondID: "GB016",
    Issuer: "British Government",
    Symbol: "UKGILT5Y",
    MaturityDate: "2040-10-12",
    CouponRate: 3.0,
    FaceValue: 90000,
    Currency: "GBP",
    purchased: false,
  },
  {
    BondID: "GB017",
    Issuer: "British Government",
    Symbol: "UKGILT5Y",
    MaturityDate: "2035-03-01",
    CouponRate: 2.25,
    FaceValue: 65000,
    Currency: "GBP",
    purchased: false,
  },
  {
    BondID: "GB018",
    Issuer: "British Government",
    Symbol: "UKGILT5Y",
    MaturityDate: "2033-07-07",
    CouponRate: 1.9,
    FaceValue: 3000,
    Currency: "GBP",
    purchased: false,
  },
  {
    BondID: "GB019",
    Issuer: "British Government",
    Symbol: "UKGILT5Y",
    MaturityDate: "2037-08-30",
    CouponRate: 2.8,
    FaceValue: 70000,
    Currency: "GBP",
    purchased: false,
  },
  {
    BondID: "GB020",
    Issuer: "British Government",
    Symbol: "UKGILT5Y",
    MaturityDate: "2029-11-01",
    CouponRate: 1.4,
    FaceValue: 35000,
    Currency: "GBP",
    purchased: false,
  },
];

process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;
const { v4: uuidv4 } = require("uuid");

router.get("/", function (req, res, next) {
  const listOfAvailableBonds = staticListOfBonds.filter((bond) => {
    return !bond.purchased;
  });

  res.json(listOfAvailableBonds);
});

router.post("/buy", async function (req, res, next) {
  const { buyerName, bondId } = req.body;

  // Find the bond...
  const foundBondIndex = staticListOfBonds.findIndex((bond) => {
    return bond.BondID === bondId;
  });

  if (foundBondIndex === -1) {
    res.status(400).json({
      status: 400,
      message: "Unkown Bond ID",
    });
  } else if (staticListOfBonds[foundBondIndex].purchased) {
    res.status(400).json({
      status: 400,
      message: "Bond has already been purchased",
    });
  }

  staticListOfBonds[foundBondIndex].purchased = true;

  // Retrieve information about the two parties
  // Government = Issuer of the Government Bond
  // Buyer = Owner of the Government Bond
  const { governmentHoldingIdentity, buyerHoldingIdentity } =
    await getListOfVirtualNodes(buyerName);

  const issueTokenResponse = await issueTokenOnLedger(
    governmentHoldingIdentity,
    buyerHoldingIdentity,
    staticListOfBonds[foundBondIndex]
  );

  await new Promise((resolve) => setTimeout(resolve, 1500));

  res.json({ issueTokenResponse });
});

router.get("/list", async function (req, res, next) {
  const { name } = req.query;

  const { buyerHoldingIdentity } = await getListOfVirtualNodes(name);

  const result = await getListOfGovernmentBondsForUser(
    buyerHoldingIdentity.shortHash
  );

  const responseJson = JSON.parse(result.flowResult);

  res.json(responseJson);
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

async function issueTokenOnLedger(issuer, owner, bond) {
  const requestBody = {
    clientRequestId: uuidv4(),
    flowClassName:
      "com.r3.developers.samples.tokens.workflows.issue.IssueGovernmentBondTokensFlow",
    requestBody: {
      symbol: "UKGILT5Y",
      amount: bond.FaceValue,
      owner: owner.x500Name,
      bondId: bond.BondID,
      maturityDate: bond.MaturityDate,
      couponRate: bond.CouponRate,
      currency: bond.Currency,
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

async function getListOfGovernmentBondsForUser(userShortHash) {
  const clientRequestId = "list-" + uuidv4();
  const requestBody = {
    clientRequestId: clientRequestId,
    flowClassName:
      "com.r3.developers.samples.tokens.workflows.list.ListGovernmentBondTokens",
    requestBody: {},
  };

  await fetch(`https://localhost:8888/api/v1/flow/${userShortHash}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: "Basic YWRtaW46YWRtaW4=",
    },
    body: JSON.stringify(requestBody),
  })
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error("Error:", error);
    });

  let resultOfFlow = await getResultOfFlow(userShortHash, clientRequestId);

  while (resultOfFlow.flowStatus != "COMPLETED") {
    resultOfFlow = await getResultOfFlow(userShortHash, clientRequestId);
  }

  return resultOfFlow;
}

const getResultOfFlow = async (userShortHash, clientRequestId) => {
  const result = await fetch(
    `https://localhost:8888/api/v1/flow/${userShortHash}/${clientRequestId}`,
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
      return data;
    })
    .catch((error) => {
      console.error("Error:", error);
    });

  return result;
};

module.exports = router;
