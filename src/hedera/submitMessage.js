
const { TopicMessageSubmitTransaction } = require("@hashgraph/sdk");
const client = require("./client");

const data = {
  BondID: 2,
  Issuer: 'British Government',
  Symbol: 'UKBOND',
  MaturityDate: '2029-08-13',
  CouponRate: 1.5,
  FaceValue: 5000,
  Currency: 'GBP',
  purchased: true,
  burnt: true,
  owner: '0x4Df4ee403FC600f8Afa7F66e42989A2933a71559'
}

const main = async () => {
  // Create the transaction
  await new TopicMessageSubmitTransaction({
    topicId: process.env.TOPIC_ID,
    message: JSON.stringify(data),
  }).execute(client);

}

main()
  .then(() => {
    console.log("Message created")
    process.exit(0)
  })
  .catch((err) => {
    console.error(err)
    process.exit(1)
  })
