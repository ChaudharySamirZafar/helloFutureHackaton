require("dotenv").config();
const backendUrl = process.env.BACKEND_URL;

async function getListOfVirtualNodes(buyerName) {
  let governmentHoldingIdentity = undefined;
  let buyerHoldingIdentity = undefined;

  const url = `${backendUrl}/api/v1/virtualNode`;

  const listOfVirtualNodes = await fetch(url, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error("Error:", error);
    });

  listOfVirtualNodes.map((node) => {
    if (
      node.x500Name ===
      "CN=British Government, OU=Test Dept, O=British Government, L=London, C=GB"
    ) {
      governmentHoldingIdentity = node;
    }
    if (node.x500Name.includes(`CN=${buyerName}`)) {
      buyerHoldingIdentity = node;
    }
  });

  return {
    governmentHoldingIdentity,
    buyerHoldingIdentity,
  };
}

module.exports = getListOfVirtualNodes;
