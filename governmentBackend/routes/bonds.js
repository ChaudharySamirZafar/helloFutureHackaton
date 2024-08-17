var express = require("express");
var router = express.Router();
const staticListOfBonds = [
  {
    BondID: "GB001",
    Issuer: "British Government",
    Symbol: "UKGILT5Y",
    MaturityDate: "2029-08-13",
    CouponRate: 1.5,
    FaceValue: 5000,
    Currency: "GBP",
    purchased: false,
    burnt: false,
    owner: "",
  },
  {
    BondID: "GB002",
    Issuer: "British Government",
    Symbol: "UKGILT5Y",
    MaturityDate: "2028-06-15",
    CouponRate: 2.0,
    FaceValue: 10000,
    Currency: "GBP",
    purchased: false,
    burnt: false,
    owner: "",
  },
  {
    BondID: "GB003",
    Issuer: "British Government",
    Symbol: "UKGILT5Y",
    MaturityDate: "2030-11-30",
    CouponRate: 1.75,
    FaceValue: 20000,
    Currency: "GBP",
    purchased: false,
    burnt: false,
    owner: "",
  },
  {
    BondID: "GB004",
    Issuer: "British Government",
    Symbol: "UKGILT5Y",
    MaturityDate: "2027-05-01",
    CouponRate: 1.25,
    FaceValue: 15000,
    FaceValue: 16000,
    Currency: "GBP",
    purchased: false,
    burnt: false,
    owner: "",
  },
  {
    BondID: "GB005",
    Issuer: "British Government",
    Symbol: "UKGILT5Y",
    MaturityDate: "2031-09-12",
    CouponRate: 1.6,
    FaceValue: 1000,
    Currency: "GBP",
    purchased: false,
    burnt: false,
    owner: "",
  },
  {
    BondID: "GB006",
    Issuer: "British Government",
    Symbol: "UKGILT5Y",
    MaturityDate: "2026-07-20",
    CouponRate: 2.5,
    FaceValue: 25000,
    Currency: "GBP",
    purchased: false,
    burnt: false,
    owner: "",
  },
  {
    BondID: "GB007",
    Issuer: "British Government",
    Symbol: "UKGILT5Y",
    MaturityDate: "2029-10-01",
    CouponRate: 1.3,
    FaceValue: 40000,
    Currency: "GBP",
    purchased: false,
    burnt: false,
    owner: "",
  },
  {
    BondID: "GB008",
    Issuer: "British Government",
    Symbol: "UKGILT5Y",
    MaturityDate: "2033-02-25",
    CouponRate: 2.0,
    FaceValue: 50000,
    Currency: "GBP",
    purchased: false,
    burnt: false,
    owner: "",
  },
  {
    BondID: "GB009",
    Issuer: "British Government",
    Symbol: "UKGILT5Y",
    MaturityDate: "2027-03-15",
    CouponRate: 1.8,
    FaceValue: 10000,
    FaceValue: 11000,
    Currency: "GBP",
    purchased: false,
    burnt: false,
    owner: "",
  },
  {
    BondID: "GB010",
    Issuer: "British Government",
    Symbol: "UKGILT5Y",
    MaturityDate: "2034-04-10",
    CouponRate: 1.9,
    FaceValue: 75000,
    Currency: "GBP",
    purchased: false,
    burnt: false,
    owner: "",
  },
  {
    BondID: "GB011",
    Issuer: "British Government",
    Symbol: "UKGILT5Y",
    MaturityDate: "2038-12-01",
    CouponRate: 2.5,
    FaceValue: 30000,
    Currency: "GBP",
    purchased: false,
    burnt: false,
    owner: "",
  },
  {
    BondID: "GB012",
    Issuer: "British Government",
    Symbol: "UKGILT5Y",
    MaturityDate: "2031-08-13",
    CouponRate: 2.0,
    FaceValue: 100000,
    Currency: "GBP",
    purchased: false,
    burnt: false,
    owner: "",
  },
  {
    BondID: "GB013",
    Issuer: "British Government",
    Symbol: "UKGILT5Y",
    MaturityDate: "2029-01-01",
    CouponRate: 1.5,
    FaceValue: 15000,
    Currency: "GBP",
    purchased: false,
    burnt: false,
    owner: "",
  },
  {
    BondID: "GB014",
    Issuer: "British Government",
    Symbol: "UKGILT5Y",
    MaturityDate: "2032-09-30",
    CouponRate: 1.7,
    FaceValue: 12000,
    Currency: "GBP",
    purchased: false,
    burnt: false,
    owner: "",
  },
  {
    BondID: "GB015",
    Issuer: "British Government",
    Symbol: "UKGILT5Y",
    MaturityDate: "2026-02-15",
    CouponRate: 1.6,
    FaceValue: 45000,
    Currency: "GBP",
    purchased: false,
    burnt: false,
    owner: "",
  },
  {
    BondID: "GB016",
    Issuer: "British Government",
    Symbol: "UKGILT5Y",
    MaturityDate: "2040-10-12",
    CouponRate: 3.0,
    FaceValue: 90000,
    Currency: "GBP",
    purchased: false,
    burnt: false,
    owner: "",
  },
  {
    BondID: "GB017",
    Issuer: "British Government",
    Symbol: "UKGILT5Y",
    MaturityDate: "2035-03-01",
    CouponRate: 2.25,
    FaceValue: 65000,
    Currency: "GBP",
    purchased: false,
    burnt: false,
    owner: "",
  },
  {
    BondID: "GB018",
    Issuer: "British Government",
    Symbol: "UKGILT5Y",
    MaturityDate: "2033-07-07",
    CouponRate: 1.9,
    FaceValue: 3000,
    Currency: "GBP",
    purchased: false,
    burnt: false,
    owner: "",
  },
  {
    BondID: "GB019",
    Issuer: "British Government",
    Symbol: "UKGILT5Y",
    MaturityDate: "2037-08-30",
    CouponRate: 2.8,
    FaceValue: 70000,
    Currency: "GBP",
    purchased: false,
    burnt: false,
    owner: "",
  },
  {
    BondID: "GB020",
    Issuer: "British Government",
    Symbol: "UKGILT5Y",
    MaturityDate: "2029-11-01",
    CouponRate: 1.4,
    FaceValue: 35000,
    Currency: "GBP",
    purchased: false,
    burnt: false,
    owner: "",
  },
];

process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;

var getListOfVirtualNodes = require("./services/common/getListOfVirtualNodes");
var issueTokenOnLedger = require("./services/buy/issueTokenOnLedger");
var getListOfGovernmentBondsForUser = require("./services/list/getListOfGovernmentBondsForUser");
var burnTokenOnLedger = require("./services/burn/burnTokenOnLedger");
var submitMessage = require("./services/hadera/haderaConsensus");

router.get("/", function (req, res, next) {
  const listOfAvailableBonds = staticListOfBonds.filter((bond) => {
    return !bond.purchased;
  });

  res.json(listOfAvailableBonds);
});

router.post("/buy", async function (req, res, next) {
  const { buyerName, bondId } = req.body;

  // Find the bond...
  const foundBondIndex = staticListOfBonds.findIndex((bond) => {
    return bond.BondID === bondId;
  });

  if (foundBondIndex === -1) {
    res.status(400).json({
      status: 400,
      message: "Unkown Bond ID",
    });
  } else if (staticListOfBonds[foundBondIndex].purchased) {
    res.status(400).json({
      status: 400,
      message: "Bond has already been purchased",
    });
  }

  staticListOfBonds[foundBondIndex].purchased = true;
  staticListOfBonds[foundBondIndex].owner = buyerName;

  // Retrieve information about the two parties
  // Government = Issuer of the Government Bond
  // Buyer = Owner of the Government Bond
  const { governmentHoldingIdentity, buyerHoldingIdentity } =
    await getListOfVirtualNodes(buyerName);

  const issueTokenResponse = await issueTokenOnLedger(
    governmentHoldingIdentity,
    buyerHoldingIdentity,
    staticListOfBonds[foundBondIndex]
  );

  await new Promise((resolve) => setTimeout(resolve, 5000));

  res.json({ issueTokenResponse });
});

router.get("/list", async function (req, res, next) {
  const { name } = req.query;

  const { buyerHoldingIdentity } = await getListOfVirtualNodes(name);

  const result = await getListOfGovernmentBondsForUser(
    buyerHoldingIdentity.shortHash
  );

  const listOfOwnedGovernmentBondsOnPrivateLedgerUnformated = JSON.parse(
    result.flowResult
  );

  const listOfGovernmentBondsOnPublicLedgerUnformated =
    staticListOfBonds.filter((bond) => {
      return bond.purchased && bond.burnt && bond.owner === name;
    });

  const listOfGovernmentBondsOnPublicLedger =
    listOfGovernmentBondsOnPublicLedgerUnformated.map((publicBonds) => {
      return {
        issuer: "",
        symbol: publicBonds.Symbol,
        value: publicBonds.FaceValue,
        owner: publicBonds.owner,
        issuerCommonName: publicBonds.Issuer,
        ownerCommonName: publicBonds.owner,
        bondId: publicBonds.BondID,
        maturityDate: publicBonds.MaturityDate,
        couponRate: publicBonds.CouponRate,
        currency: "GBP",
        public: true,
      };
    });

  const listOfGovernmentBondsOnPrivateLedger =
    listOfOwnedGovernmentBondsOnPrivateLedgerUnformated.map((bond) => {
      return {
        ...bond,
        public: false,
      };
    });

  res.json([
    ...listOfGovernmentBondsOnPrivateLedger,
    ...listOfGovernmentBondsOnPublicLedger,
  ]);
});

router.post("/burn", async function (req, res, next) {
  const { ownerName, bondId } = req.body;

  const { buyerHoldingIdentity } = await getListOfVirtualNodes(ownerName);

  // Find the bond...
  const foundBondIndex = staticListOfBonds.findIndex((bond) => {
    return bond.BondID === bondId;
  });

  const bond = staticListOfBonds[foundBondIndex];

  if (foundBondIndex === -1) {
    res.status(400).json({
      status: 400,
      message: "Unkown Bond ID",
    });
    return;
  } else if (bond.purchased === false) {
    res.status(400).json({
      status: 400,
      message: "Bond has not been purchased",
    });
    return;
  }

  const burnTokenOnLedgerResponse = await burnTokenOnLedger(
    buyerHoldingIdentity,
    bond
  );

  if (burnTokenOnLedgerResponse.flowResult === "BURNT_TOKEN_SUCCESSFULLY") {
    bond.burnt = true;
  }

  submitMessage(bond);

  res.json(burnTokenOnLedgerResponse);
});

module.exports = router;
