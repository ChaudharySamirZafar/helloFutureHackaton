# Government Backend 
This is a dummy government backend. It interacts with the R3 Corda application aswell as the Hadera Consensus service.

## Overview
4 Endpoints:
- `baseUrl/bonds`
  - List the government bonds available for purchase
- `baseUrl/bonds/buy`
  - Buy a government bond and issue it on the private blockchain, the issuing is completed by the R3 Corda application.
- `/baseUrl/bonds/list`
  - List the government bonds owned, this basically checks with the R3 corda app which bonds the user owns.
- `/baseUrl/bonds/burn`
  - Burn a given government bond token on the private blockchain, send a message to the hedera consensus service.

## Running the app
1. Create a `.env` file with the following
    1. BACKEND_URL, MY_ACCOUNT_ID, MY_PRIVATE_KEY, TOPIC_ID
        1. BACKEND_URL is the URL of R3 Corda Application `/ShinyTokenCustom`
    2. MY_ACCOUNT_ID, MY_PRIVATE_KEY, TOPIC_ID are all related to Hedera and the Hedera consensus service.
2. Run the following command `npm install`
3. Run the following command `npm run start` to get the application running

## Troubleshooting
- node `v21.7.3` was used when developing.
