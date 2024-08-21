# ShinyTokenCustom

This is a dummy application that represents what `shinny-tokens` does. It represents an application that interacts with a private blockchain.

## Overview
2 Endpoints:
- `GET baseUrl/api/v1/virtualNode`
    - List the entities that are allowed to interact with the private blockchain. I.e. british government, Samir.
- `POST baseUrl/api/v1/flow/{issuerShortHash}`
    - This is a dynamic endpoint. You pass in the initiators short hash and a pass the body shown below.
      - You can pass any client request ID (that's for your reference)
      - The flow class name must be one of the following [IssueGovernmentBondTokensFlow, ListGovernmentBondTokens, BurnGovernmentBondTokenFlow]
      - The requestBody is different for each flow.
  
IssueGovernmentBondTokensFlow Request Example
```
{
    "clientRequestId": "issue-1",
    "flowClassName": "IssueGovernmentBondTokensFlow",
    "requestBody": {
        symbol: `UKGILT5Y-${bond.BondID}`,
        amount: bond.FaceValue,
        owner: owner.x500Name,
        bondId: bond.BondID,
        maturityDate: bond.MaturityDate,
        couponRate: bond.CouponRate,
        currency: bond.Currency,
    }
}
```

ListGovernmentBondTokens Request Example
```
{
    clientRequestId: "list-1",
    flowClassName: "ListGovernmentBondTokens",
    requestBody: {},
}
```

BurnGovernmentBondTokenFlow
```
{
    clientRequestId: clientRequestId,
    flowClassName: "BurnGovernmentBondTokenFlow",
    requestBody: {
          symbol: bondSymbol,
    },
}
```
The Application uses in an in-memory database, so be vary if you restart the application, data will be lost.

### Prerequisites
- Java Azul 17
- Intellij (Highly recommended but not needed)

## Running the app
1. Wait for Intelij to index the project and run the application.