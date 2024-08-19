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

  // TO:DO Refactor this..
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

module.exports = getListOfVirtualNodes;
