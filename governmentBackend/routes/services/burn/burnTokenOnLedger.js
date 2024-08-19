const { v4: uuidv4 } = require("uuid");
require("dotenv").config();

const backendUrl = process.env.BACKEND_URL;

async function burnTokenOnLedger(owner, bond) {
  const clientRequestId = `burn-${uuidv4()}`;
  const ownerShortHash = owner.shortHash;

  const requestBody = {
    clientRequestId: clientRequestId,
    flowClassName: "BurnGovernmentBondTokenFlow",
    requestBody: {
      symbol: `${bond.Symbol}-${bond.BondID}`,
    },
  };

  const result = await fetch(`${backendUrl}/api/v1/flow/${ownerShortHash}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
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

  return result;
}

module.exports = burnTokenOnLedger;
