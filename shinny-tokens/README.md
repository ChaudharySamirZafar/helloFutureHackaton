# Government Bond Tokens in Next-Gen Corda
## Government Bond Tokens app
In this application, we will mint, list and burn Government Bond Tokens.

### Prerequisites
- Java Azul 17
- Docker
- Intellij (Highly recommended but not needed)

### Setting up

1. We will begin our test deployment with clicking the `startCorda`. This task will load up the combined Corda workers in docker (Make sure docker is running!).
   A successful deployment will allow you to open the REST APIs at: https://localhost:8888/api/v5_2/swagger#/. You can test out some of the
   functions to check connectivity. (GET /cpi function call should return an empty list as for now.)
2. We will now deploy the cordapp with a click of `5-vNodeSetup` task. 
3. Upon successful deployment of the CPI, the GET /cpi function call should now return the meta data of the cpi you just upload

### Running the Government Bond Tokens app

In Corda 5, flows will be triggered via `POST /flow/{holdingidentityshorthash}` and flow result will need to be view at `GET /flow/{holdingidentityshorthash}/{clientrequestid}`
* holdingidentityshorthash: the id of the network participants, ie British Government, Samir. You can view all the short hashes of the network member with another gradle task called `ListVNodes`
* clientrequestid: the id you specify in the flow requestBody when you trigger a flow.

#### Step 1: Create a Government Bond Token
Pick a VNode identity, and get its short hash. (Let's pick British Government).

Issuing only works if the British Government is the issuer.

Go to `POST /flow/{holdingidentityshorthash}`, enter the identity short hash (British Government's hash) and request body:
```
{
    "clientRequestId": "issue-1",
    "flowClassName": "com.r3.developers.samples.tokens.workflows.issue.IssueGovernmentBondTokensFlow",
    "requestBody": {
        "symbol": "UKGILT5Y",
        "owner": "CN=Samir, OU=Test Dept, O=Samir, L=London, C=G",
        "amount": "5000"
    }
}
```

After triggering the IssueGoldTokensFlow flow, hop to `GET /flow/{holdingidentityshorthash}/{clientrequestid}` and enter the short hash(British Government's hash) and clientrequestid to view the flow result

#### Step 2: List the Government Bond Tokens Samir Owns
Go to `POST /flow/{holdingidentityshorthash}`, enter the identity short hash(Samir's hash) and request body:
```
{
    "clientRequestId": "list-1",
    "flowClassName": "com.r3.developers.samples.tokens.workflows.list.ListGovernmentBondTokens",
    "requestBody": {}
}
```
After triggering the ListGoldTokens flow, again, we need to hop to `GET /flow/{holdingidentityshorthash}/{clientrequestid}`
and check the result.

#### Step 5: Burn gold token with BurnGovernmentBondTokenFlow
Go to `POST /flow/{holdingidentityshorthash}`, enter the identity short hash(Samir's hash) and request body:
```
{
    "clientRequestId": "burn-1",
    "flowClassName": "com.r3.developers.samples.tokens.workflows.burn.BurnGovernmentBondTokenFlow",
    "requestBody": {
        "symbol": "UKGILT5Y",
        "amount": "5000"
        }
}
```
Go to `GET /flow/{holdingidentityshorthash}/{clientrequestid}` and enter the required fields to check the result of
the flow.

#### Step 4: List the Government Bond Tokens Samir Owns (Should be 0 now)
Go to `POST /flow/{holdingidentityshorthash}`, enter the identity short hash(Samir's hash) and request body:
```
{
    "clientRequestId": "list-1",
    "flowClassName": "com.r3.developers.samples.tokens.workflows.list.ListGovernmentBondTokens",
    "requestBody": {}
}
```

After triggering the ListGoldTokens flow, again, we need to hop to `GET /flow/{holdingidentityshorthash}/{clientrequestid}`
and check the result. Samir should own 0 tokens now.

This has exposed you to the full functionality of this application.
