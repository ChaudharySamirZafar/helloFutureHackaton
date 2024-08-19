const { TopicMessageQuery } = require("@hashgraph/sdk");
const { ethers } = require("ethers");
require("dotenv").config();
const client = require("./client");
const contractAbi = require("./bondContractAbi.json");

const provider = new ethers.InfuraProvider(
  "sepolia",
  process.env.INFURA_API_KEY
);
const signer = new ethers.Wallet(process.env.PRIVATE_KEY_ETH, provider);
const contract = new ethers.Contract(process.env.ETH_ADDRESS, contractAbi.abi);

const handleMessage = async (message) => {
  try {
    const data =
      JSON.parse(Buffer.from(message.contents, "utf8").toString()) ?? {};

    const {
      BondID,
      Issuer,
      Symbol,
      MaturityDate,
      CouponRate,
      FaceValue,
      Currency,
      purchased,
      burnt,
      bondNId,
    } = data.bond;

    console.log("Minting token onto public blockchain....");

    await contract.connect(signer).safeMint(data.ownerAddress, bondNId);
  } catch (e) {
    console.error(e);
  }
};

const main = async () => {
  // Create the query
  new TopicMessageQuery()
    .setTopicId(process.env.TOPIC_ID)
    .subscribe(client, handleMessage);

  console.log("Successfully Subscribed to Topic");
};

main();
