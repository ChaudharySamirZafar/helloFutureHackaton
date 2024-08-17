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

module.exports = getResultOfFlow;
