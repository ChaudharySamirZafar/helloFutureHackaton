const { v4: uuidv4 } = require("uuid");

async function issueTokenOnLedger(issuer, owner, bond) {
  const requestBody = {
    clientRequestId: uuidv4(),
    flowClassName:
      "com.r3.developers.samples.tokens.workflows.issue.IssueGovernmentBondTokensFlow",
    requestBody: {
      symbol: `UKGILT5Y-${bond.BondID}`,
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

module.exports = issueTokenOnLedger;
