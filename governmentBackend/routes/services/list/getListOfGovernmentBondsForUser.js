const { v4: uuidv4 } = require("uuid");

async function getListOfGovernmentBondsForUser(userShortHash) {
  const clientRequestId = "list-" + uuidv4();
  const requestBody = {
    clientRequestId: clientRequestId,
    flowClassName: "ListGovernmentBondTokens",
    requestBody: {},
  };

  const result = await fetch(
    `http://localhost:8080/api/v1/flow/${userShortHash}`,
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

  console.log(result);

  return result;
}

module.exports = getListOfGovernmentBondsForUser;
