require("dotenv").config();
const { Client, TopicMessageSubmitTransaction } = require("@hashgraph/sdk");

const myAccountId = process.env.MY_ACCOUNT_ID;
const myPrivateKey = process.env.MY_PRIVATE_KEY;
const topicId = process.env.TOPIC_ID;

const client = Client.forTestnet();

client.setOperator(myAccountId, myPrivateKey);

async function submitMessage(bond) {
  let sendResponse = await new TopicMessageSubmitTransaction({
    topicId: topicId,
    message: JSON.stringify(bond),
  }).execute(client);

  const getReceipt = await sendResponse.getReceipt(client);

  // Get the status of the transaction
  const transactionStatus = getReceipt.status;
  console.log(
    "The message transaction status: " + transactionStatus.toString()
  );
}

module.exports = submitMessage;
