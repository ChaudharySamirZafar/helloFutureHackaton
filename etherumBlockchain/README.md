# Etherum Blockchain 
## `/eth`
The project does not need to be ran. The contract has been deployed successfully.
## `/hedera`
### Running the app
1. Create a `.env` file with the following 
   1. INFURA_API_KEY, PRIVATE_KEY_ETH, ETH_ADDRESS, ACCOUNT_ID, PRIVATE_KEY, TOPIC_ID 
      1. Topic ID being the topic you want to listen to from the hadera consensus service
2. Run `npm install` in the terminal
3. Run `node subscribeTopic` in the terminal, and you will successfully be listening for a message on the topic specified.
