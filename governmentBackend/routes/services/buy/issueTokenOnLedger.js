const { v4: uuidv4 } = require("uuid");

async function issueTokenOnLedger(issuer, owner, bond) {
  const requestBody = {
    clientRequestId: uuidv4(),
    flowClassName: "IssueGovernmentBondTokensFlow",
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
    `http://localhost:8080/api/v1/flow/${issuer.shortHash}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
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
