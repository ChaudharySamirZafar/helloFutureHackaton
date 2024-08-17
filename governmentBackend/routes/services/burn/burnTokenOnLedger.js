const { v4: uuidv4 } = require("uuid");
var getResultOfFlow = require("../common/getResultOfFlow");

async function burnTokenOnLedger(owner, bond) {
  const clientRequestId = `burn-${uuidv4()}`;
  const ownerShortHash = owner.shortHash;

  const requestBody = {
    clientRequestId: clientRequestId,
    flowClassName:
      "com.r3.developers.samples.tokens.workflows.burn.BurnGovernmentBondTokenFlow",
    requestBody: {
      symbol: `${bond.Symbol}-${bond.BondID}`,
      amount: bond.FaceValue,
    },
  };

  await fetch(`https://localhost:8888/api/v1/flow/${ownerShortHash}`, {
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

  let resultOfFlow = await getResultOfFlow(ownerShortHash, clientRequestId);

  while (resultOfFlow.flowStatus != "COMPLETED") {
    resultOfFlow = await getResultOfFlow(ownerShortHash, clientRequestId);
  }

  return resultOfFlow;
}

module.exports = burnTokenOnLedger;
