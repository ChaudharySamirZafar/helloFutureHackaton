const { v4: uuidv4 } = require("uuid");
var getResultOfFlow = require("../common/getResultOfFlow");

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

module.exports = getListOfGovernmentBondsForUser;
