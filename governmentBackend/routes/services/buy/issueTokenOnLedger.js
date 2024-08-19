const { v4: uuidv4 } = require("uuid");
require("dotenv").config();

const backendUrl = process.env.BACKEND_URL;

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
    `${backendUrl}/api/v1/flow/${issuer.shortHash}`,
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
