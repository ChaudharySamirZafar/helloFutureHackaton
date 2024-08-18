const { TopicCreateTransaction, Client } = require("@hashgraph/sdk")
const client = require("./client")

const main = async () => {
  // Create the transaction
  const transaction = new TopicCreateTransaction();
  // Sign with the client operator private key and submit the transaction to a Hedera network
  const txResponse = await transaction.execute(client);
  // Request the receipt of the transaction
  const receipt = await txResponse.getReceipt(client);
  // Get the topic ID
  const newTopicId = receipt.topicId;
  console.log("The new topic ID is " + newTopicId);
}

main()
  .then(() => {
    console.log("Topic Created")
    process.exit(0)
  })
  .catch((err) => {
    console.error(err)
    process.exit(1)
  })
