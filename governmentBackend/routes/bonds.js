var express = require("express");
var router = express.Router();
const staticListOfBonds = [
  {
    BondID: 'GB001',
    Issuer: 'British Government',
    Symbol: 'UKGILT5Y',
    MaturityDate: '2029-08-13',
    CouponRate: 1.5,
    FaceValue: 5000,
    Currency: 'GBP',
    purchased: false,
    burnt: false,
    owner: '',
    bondNId: 1001
  },
  {
    BondID: 'GB002',
    Issuer: 'British Government',
    Symbol: 'UKGILT5Y',
    MaturityDate: '2028-06-15',
    CouponRate: 2,
    FaceValue: 10000,
    Currency: 'GBP',
    purchased: false,
    burnt: false,
    owner: '',
    bondNId: 1002
  },
  {
    BondID: 'GB003',
    Issuer: 'British Government',
    Symbol: 'UKGILT5Y',
    MaturityDate: '2030-11-30',
    CouponRate: 1.75,
    FaceValue: 20000,
    Currency: 'GBP',
    purchased: false,
    burnt: false,
    owner: '',
    bondNId: 1003
  },
  {
    BondID: 'GB004',
    Issuer: 'British Government',
    Symbol: 'UKGILT5Y',
    MaturityDate: '2027-05-01',
    CouponRate: 1.25,
    FaceValue: 16000,
    Currency: 'GBP',
    purchased: false,
    burnt: false,
    owner: '',
    bondNId: 1004
  },
  {
    BondID: 'GB005',
    Issuer: 'British Government',
    Symbol: 'UKGILT5Y',
    MaturityDate: '2031-09-12',
    CouponRate: 1.6,
    FaceValue: 1000,
    Currency: 'GBP',
    purchased: false,
    burnt: false,
    owner: '',
    bondNId: 1005
  },
  {
    BondID: 'GB006',
    Issuer: 'British Government',
    Symbol: 'UKGILT5Y',
    MaturityDate: '2026-07-20',
    CouponRate: 2.5,
    FaceValue: 25000,
    Currency: 'GBP',
    purchased: false,
    burnt: false,
    owner: '',
    bondNId: 1006
  },
  {
    BondID: 'GB007',
    Issuer: 'British Government',
    Symbol: 'UKGILT5Y',
    MaturityDate: '2029-10-01',
    CouponRate: 1.3,
    FaceValue: 40000,
    Currency: 'GBP',
    purchased: false,
    burnt: false,
    owner: '',
    bondNId: 1007
  },
  {
    BondID: 'GB008',
    Issuer: 'British Government',
    Symbol: 'UKGILT5Y',
    MaturityDate: '2033-02-25',
    CouponRate: 2,
    FaceValue: 50000,
    Currency: 'GBP',
    purchased: false,
    burnt: false,
    owner: '',
    bondNId: 1008
  },
  {
    BondID: 'GB009',
    Issuer: 'British Government',
    Symbol: 'UKGILT5Y',
    MaturityDate: '2027-03-15',
    CouponRate: 1.8,
    FaceValue: 11000,
    Currency: 'GBP',
    purchased: false,
    burnt: false,
    owner: '',
    bondNId: 1009
  },
  {
    BondID: 'GB010',
    Issuer: 'British Government',
    Symbol: 'UKGILT5Y',
    MaturityDate: '2034-04-10',
    CouponRate: 1.9,
    FaceValue: 75000,
    Currency: 'GBP',
    purchased: false,
    burnt: false,
    owner: '',
    bondNId: 1010
  },
  {
    BondID: 'GB011',
    Issuer: 'British Government',
    Symbol: 'UKGILT5Y',
    MaturityDate: '2038-12-01',
    CouponRate: 2.5,
    FaceValue: 30000,
    Currency: 'GBP',
    purchased: false,
    burnt: false,
    owner: '',
    bondNId: 1011
  },
  {
    BondID: 'GB012',
    Issuer: 'British Government',
    Symbol: 'UKGILT5Y',
    MaturityDate: '2031-08-13',
    CouponRate: 2,
    FaceValue: 100000,
    Currency: 'GBP',
    purchased: false,
    burnt: false,
    owner: '',
    bondNId: 1012
  },
  {
    BondID: 'GB013',
    Issuer: 'British Government',
    Symbol: 'UKGILT5Y',
    MaturityDate: '2029-01-01',
    CouponRate: 1.5,
    FaceValue: 15000,
    Currency: 'GBP',
    purchased: false,
    burnt: false,
    owner: '',
    bondNId: 1013
  },
  {
    BondID: 'GB014',
    Issuer: 'British Government',
    Symbol: 'UKGILT5Y',
    MaturityDate: '2032-09-30',
    CouponRate: 1.7,
    FaceValue: 12000,
    Currency: 'GBP',
    purchased: false,
    burnt: false,
    owner: '',
    bondNId: 1014
  },
  {
    BondID: 'GB015',
    Issuer: 'British Government',
    Symbol: 'UKGILT5Y',
    MaturityDate: '2026-02-15',
    CouponRate: 1.6,
    FaceValue: 45000,
    Currency: 'GBP',
    purchased: false,
    burnt: false,
    owner: '',
    bondNId: 1015
  },
  {
    BondID: 'GB016',
    Issuer: 'British Government',
    Symbol: 'UKGILT5Y',
    MaturityDate: '2040-10-12',
    CouponRate: 3,
    FaceValue: 90000,
    Currency: 'GBP',
    purchased: false,
    burnt: false,
    owner: '',
    bondNId: 1016
  },
  {
    BondID: 'GB017',
    Issuer: 'British Government',
    Symbol: 'UKGILT5Y',
    MaturityDate: '2035-03-01',
    CouponRate: 2.25,
    FaceValue: 65000,
    Currency: 'GBP',
    purchased: false,
    burnt: false,
    owner: '',
    bondNId: 1017
  },
  {
    BondID: 'GB018',
    Issuer: 'British Government',
    Symbol: 'UKGILT5Y',
    MaturityDate: '2033-07-07',
    CouponRate: 1.9,
    FaceValue: 3000,
    Currency: 'GBP',
    purchased: false,
    burnt: false,
    owner: '',
    bondNId: 1018
  },
  {
    BondID: 'GB019',
    Issuer: 'British Government',
    Symbol: 'UKGILT5Y',
    MaturityDate: '2037-08-30',
    CouponRate: 2.8,
    FaceValue: 70000,
    Currency: 'GBP',
    purchased: false,
    burnt: false,
    owner: '',
    bondNId: 1019
  },
  {
    BondID: 'GB020',
    Issuer: 'British Government',
    Symbol: 'UKGILT5Y',
    MaturityDate: '2029-11-01',
    CouponRate: 1.4,
    FaceValue: 35000,
    Currency: 'GBP',
    purchased: false,
    burnt: false,
    owner: '',
    bondNId: 1020
  },
  {
    BondID: 'GB021',
    Issuer: 'British Government',
    Symbol: 'UKGILT5Y',
    MaturityDate: '2035-06-15',
    CouponRate: 2.1,
    FaceValue: 40000,
    Currency: 'GBP',
    purchased: false,
    burnt: false,
    owner: '',
    bondNId: 1021
  },
  {
    BondID: 'GB022',
    Issuer: 'British Government',
    Symbol: 'UKGILT5Y',
    MaturityDate: '2028-04-30',
    CouponRate: 1.8,
    FaceValue: 12000,
    Currency: 'GBP',
    purchased: false,
    burnt: false,
    owner: '',
    bondNId: 1022
  },
  {
    BondID: 'GB023',
    Issuer: 'British Government',
    Symbol: 'UKGILT5Y',
    MaturityDate: '2031-12-01',
    CouponRate: 2.3,
    FaceValue: 60000,
    Currency: 'GBP',
    purchased: false,
    burnt: false,
    owner: '',
    bondNId: 1023
  },
  {
    BondID: 'GB024',
    Issuer: 'British Government',
    Symbol: 'UKGILT5Y',
    MaturityDate: '2025-11-15',
    CouponRate: 1.4,
    FaceValue: 15000,
    Currency: 'GBP',
    purchased: false,
    burnt: false,
    owner: '',
    bondNId: 1024
  },
  {
    BondID: 'GB025',
    Issuer: 'British Government',
    Symbol: 'UKGILT5Y',
    MaturityDate: '2036-09-30',
    CouponRate: 2.7,
    FaceValue: 20000,
    Currency: 'GBP',
    purchased: false,
    burnt: false,
    owner: '',
    bondNId: 1025
  },
  {
    BondID: 'GB026',
    Issuer: 'British Government',
    Symbol: 'UKGILT5Y',
    MaturityDate: '2028-07-01',
    CouponRate: 2.2,
    FaceValue: 8000,
    Currency: 'GBP',
    purchased: false,
    burnt: false,
    owner: '',
    bondNId: 1026
  },
  {
    BondID: 'GB027',
    Issuer: 'British Government',
    Symbol: 'UKGILT5Y',
    MaturityDate: '2032-01-15',
    CouponRate: 1.9,
    FaceValue: 30000,
    Currency: 'GBP',
    purchased: false,
    burnt: false,
    owner: '',
    bondNId: 1027
  },
  {
    BondID: 'GB028',
    Issuer: 'British Government',
    Symbol: 'UKGILT5Y',
    MaturityDate: '2026-09-01',
    CouponRate: 1.6,
    FaceValue: 5000,
    Currency: 'GBP',
    purchased: false,
    burnt: false,
    owner: '',
    bondNId: 1028
  },
  {
    BondID: 'GB029',
    Issuer: 'British Government',
    Symbol: 'UKGILT5Y',
    MaturityDate: '2037-05-15',
    CouponRate: 2.5,
    FaceValue: 70000,
    Currency: 'GBP',
    purchased: false,
    burnt: false,
    owner: '',
    bondNId: 1029
  },
  {
    BondID: 'GB030',
    Issuer: 'British Government',
    Symbol: 'UKGILT5Y',
    MaturityDate: '2030-04-01',
    CouponRate: 2,
    FaceValue: 15000,
    Currency: 'GBP',
    purchased: false,
    burnt: false,
    owner: '',
    bondNId: 1030
  },
  {
    BondID: 'GB031',
    Issuer: 'British Government',
    Symbol: 'UKGILT5Y',
    MaturityDate: '2029-12-15',
    CouponRate: 1.7,
    FaceValue: 18000,
    Currency: 'GBP',
    purchased: false,
    burnt: false,
    owner: '',
    bondNId: 1031
  },
  {
    BondID: 'GB032',
    Issuer: 'British Government',
    Symbol: 'UKGILT5Y',
    MaturityDate: '2038-05-01',
    CouponRate: 2.4,
    FaceValue: 55000,
    Currency: 'GBP',
    purchased: false,
    burnt: false,
    owner: '',
    bondNId: 1032
  },
  {
    BondID: 'GB033',
    Issuer: 'British Government',
    Symbol: 'UKGILT5Y',
    MaturityDate: '2034-08-15',
    CouponRate: 1.8,
    FaceValue: 25000,
    Currency: 'GBP',
    purchased: false,
    burnt: false,
    owner: '',
    bondNId: 1033
  },
  {
    BondID: 'GB034',
    Issuer: 'British Government',
    Symbol: 'UKGILT5Y',
    MaturityDate: '2031-07-01',
    CouponRate: 2.2,
    FaceValue: 80000,
    Currency: 'GBP',
    purchased: false,
    burnt: false,
    owner: '',
    bondNId: 1034
  },
  {
    BondID: 'GB035',
    Issuer: 'British Government',
    Symbol: 'UKGILT5Y',
    MaturityDate: '2025-10-01',
    CouponRate: 1.5,
    FaceValue: 22000,
    Currency: 'GBP',
    purchased: false,
    burnt: false,
    owner: '',
    bondNId: 1035
  },
  {
    BondID: 'GB036',
    Issuer: 'British Government',
    Symbol: 'UKGILT5Y',
    MaturityDate: '2026-05-01',
    CouponRate: 2.3,
    FaceValue: 35000,
    Currency: 'GBP',
    purchased: false,
    burnt: false,
    owner: '',
    bondNId: 1036
  },
  {
    BondID: 'GB037',
    Issuer: 'British Government',
    Symbol: 'UKGILT5Y',
    MaturityDate: '2036-12-01',
    CouponRate: 2.6,
    FaceValue: 65000,
    Currency: 'GBP',
    purchased: false,
    burnt: false,
    owner: '',
    bondNId: 1037
  },
  {
    BondID: 'GB038',
    Issuer: 'British Government',
    Symbol: 'UKGILT5Y',
    MaturityDate: '2028-03-01',
    CouponRate: 2,
    FaceValue: 11000,
    Currency: 'GBP',
    purchased: false,
    burnt: false,
    owner: '',
    bondNId: 1038
  },
  {
    BondID: 'GB039',
    Issuer: 'British Government',
    Symbol: 'UKGILT5Y',
    MaturityDate: '2030-08-15',
    CouponRate: 1.9,
    FaceValue: 7000,
    Currency: 'GBP',
    purchased: false,
    burnt: false,
    owner: '',
    bondNId: 1039
  },
  {
    BondID: 'GB040',
    Issuer: 'British Government',
    Symbol: 'UKGILT5Y',
    MaturityDate: '2027-09-01',
    CouponRate: 1.6,
    FaceValue: 27000,
    Currency: 'GBP',
    purchased: false,
    burnt: false,
    owner: '',
    bondNId: 1040
  },
  {
    BondID: 'GB041',
    Issuer: 'British Government',
    Symbol: 'UKGILT5Y',
    MaturityDate: '2032-10-15',
    CouponRate: 2.1,
    FaceValue: 45000,
    Currency: 'GBP',
    purchased: false,
    burnt: false,
    owner: '',
    bondNId: 1041
  },
  {
    BondID: 'GB042',
    Issuer: 'British Government',
    Symbol: 'UKGILT5Y',
    MaturityDate: '2039-01-01',
    CouponRate: 2.4,
    FaceValue: 50000,
    Currency: 'GBP',
    purchased: false,
    burnt: false,
    owner: '',
    bondNId: 1042
  },
  {
    BondID: 'GB043',
    Issuer: 'British Government',
    Symbol: 'UKGILT5Y',
    MaturityDate: '2026-11-01',
    CouponRate: 1.8,
    FaceValue: 35000,
    Currency: 'GBP',
    purchased: false,
    burnt: false,
    owner: '',
    bondNId: 1043
  },
  {
    BondID: 'GB044',
    Issuer: 'British Government',
  Symbol: 'UKGILT5Y',
    MaturityDate: '2027-04-01',
    CouponRate: 2.1,
    FaceValue: 12000,
    Currency: 'GBP',
    purchased: false,
    burnt: false,
    owner: '',
    bondNId: 1044
},
{
  BondID: 'GB045',
      Issuer: 'British Government',
    Symbol: 'UKGILT5Y',
    MaturityDate: '2031-03-15',
    CouponRate: 1.7,
    FaceValue: 35000,
    Currency: 'GBP',
    purchased: false,
    burnt: false,
    owner: '',
    bondNId: 1045
},
{
  BondID: 'GB046',
      Issuer: 'British Government',
    Symbol: 'UKGILT5Y',
    MaturityDate: '2034-07-01',
    CouponRate: 2.2,
    FaceValue: 9000,
    Currency: 'GBP',
    purchased: false,
    burnt: false,
    owner: '',
    bondNId: 1046
},
{
  BondID: 'GB047',
      Issuer: 'British Government',
    Symbol: 'UKGILT5Y',
    MaturityDate: '2029-05-01',
    CouponRate: 2,
    FaceValue: 55000,
    Currency: 'GBP',
    purchased: false,
    burnt: false,
    owner: '',
    bondNId: 1047
},
{
  BondID: 'GB048',
      Issuer: 'British Government',
    Symbol: 'UKGILT5Y',
    MaturityDate: '2036-08-15',
    CouponRate: 1.8,
    FaceValue: 14000,
    Currency: 'GBP',
    purchased: false,
    burnt: false,
    owner: '',
    bondNId: 1048
},
{
  BondID: 'GB049',
      Issuer: 'British Government',
    Symbol: 'UKGILT5Y',
    MaturityDate: '2033-11-01',
    CouponRate: 2.5,
    FaceValue: 10000,
    Currency: 'GBP',
    purchased: false,
    burnt: false,
    owner: '',
    bondNId: 1049
},
{
  BondID: 'GB050',
      Issuer: 'British Government',
    Symbol: 'UKGILT5Y',
    MaturityDate: '2026-04-15',
    CouponRate: 1.4,
    FaceValue: 20000,
    Currency: 'GBP',
    purchased: false,
    burnt: false,
    owner: '',
    bondNId: 1050
},
{
  BondID: 'GB051',
      Issuer: 'British Government',
    Symbol: 'UKGILT5Y',
    MaturityDate: '2039-04-01',
    CouponRate: 2,
    FaceValue: 70000,
    Currency: 'GBP',
    purchased: false,
    burnt: false,
    owner: '',
    bondNId: 1051
},
{
  BondID: 'GB052',
      Issuer: 'British Government',
    Symbol: 'UKGILT5Y',
    MaturityDate: '2027-12-01',
    CouponRate: 2.3,
    FaceValue: 28000,
    Currency: 'GBP',
    purchased: false,
    burnt: false,
    owner: '',
    bondNId: 1052
},
{
  BondID: 'GB053',
      Issuer: 'British Government',
    Symbol: 'UKGILT5Y',
    MaturityDate: '2032-03-01',
    CouponRate: 1.9,
    FaceValue: 40000,
    Currency: 'GBP',
    purchased: false,
    burnt: false,
    owner: '',
    bondNId: 1053
},
{
  BondID: 'GB054',
      Issuer: 'British Government',
    Symbol: 'UKGILT5Y',
    MaturityDate: '2025-05-15',
    CouponRate: 1.5,
    FaceValue: 8000,
    Currency: 'GBP',
    purchased: false,
    burnt: false,
    owner: '',
    bondNId: 1054
},
{
  BondID: 'GB055',
      Issuer: 'British Government',
    Symbol: 'UKGILT5Y',
    MaturityDate: '2037-10-01',
    CouponRate: 2.2,
    FaceValue: 22000,
    Currency: 'GBP',
    purchased: false,
    burnt: false,
    owner: '',
    bondNId: 1055
},
{
  BondID: 'GB056',
      Issuer: 'British Government',
    Symbol: 'UKGILT5Y',
    MaturityDate: '2031-09-01',
    CouponRate: 1.6,
    FaceValue: 60000,
    Currency: 'GBP',
    purchased: false,
    burnt: false,
    owner: '',
    bondNId: 1056
},
{
  BondID: 'GB057',
      Issuer: 'British Government',
    Symbol: 'UKGILT5Y',
    MaturityDate: '2035-11-01',
    CouponRate: 2.1,
    FaceValue: 40000,
    Currency: 'GBP',
    purchased: false,
    burnt: false,
    owner: '',
    bondNId: 1057
},
{
  BondID: 'GB058',
      Issuer: 'British Government',
    Symbol: 'UKGILT5Y',
    MaturityDate: '2029-07-01',
    CouponRate: 1.8,
    FaceValue: 15000,
    Currency: 'GBP',
    purchased: false,
    burnt: false,
    owner: '',
    bondNId: 1058
},
{
  BondID: 'GB059',
      Issuer: 'British Government',
    Symbol: 'UKGILT5Y',
    MaturityDate: '2028-12-01',
    CouponRate: 2,
    FaceValue: 10000,
    Currency: 'GBP',
    purchased: false,
    burnt: false,
    owner: '',
    bondNId: 1059
},
{
  BondID: 'GB060',
      Issuer: 'British Government',
    Symbol: 'UKGILT5Y',
    MaturityDate: '2039-11-01',
    CouponRate: 2.4,
    FaceValue: 80000,
    Currency: 'GBP',
    purchased: false,
    burnt: false,
    owner: '',
    bondNId: 1060
},
{
  BondID: 'GB061',
      Issuer: 'British Government',
    Symbol: 'UKGILT5Y',
    MaturityDate: '2026-08-01',
    CouponRate: 1.7,
    FaceValue: 35000,
    Currency: 'GBP',
    purchased: false,
    burnt: false,
    owner: '',
    bondNId: 1061
},
{
  BondID: 'GB062',
      Issuer: 'British Government',
    Symbol: 'UKGILT5Y',
    MaturityDate: '2034-11-01',
    CouponRate: 2.3,
    FaceValue: 5000,
    Currency: 'GBP',
    purchased: false,
    burnt: false,
    owner: '',
    bondNId: 1062
},
{
  BondID: 'GB063',
      Issuer: 'British Government',
    Symbol: 'UKGILT5Y',
    MaturityDate: '2025-06-01',
    CouponRate: 1.9,
    FaceValue: 20000,
    Currency: 'GBP',
    purchased: false,
    burnt: false,
    owner: '',
    bondNId: 1063
},
{
  BondID: 'GB064',
      Issuer: 'British Government',
    Symbol: 'UKGILT5Y',
    MaturityDate: '2029-08-01',
    CouponRate: 1.6,
    FaceValue: 12000,
    Currency: 'GBP',
    purchased: false,
    burnt: false,
    owner: '',
    bondNId: 1064
},
{
  BondID: 'GB065',
      Issuer: 'British Government',
    Symbol: 'UKGILT5Y',
    MaturityDate: '2033-04-01',
    CouponRate: 2.1,
    FaceValue: 60000,
    Currency: 'GBP',
    purchased: false,
    burnt: false,
    owner: '',
    bondNId: 1065
},
{
  BondID: 'GB066',
      Issuer: 'British Government',
    Symbol: 'UKGILT5Y',
    MaturityDate: '2025-01-01',
    CouponRate: 2,
    FaceValue: 30000,
    Currency: 'GBP',
    purchased: false,
    burnt: false,
    owner: '',
    bondNId: 1066
},
{
  BondID: 'GB067',
      Issuer: 'British Government',
    Symbol: 'UKGILT5Y',
    MaturityDate: '2038-09-01',
    CouponRate: 2.6,
    FaceValue: 75000,
    Currency: 'GBP',
    purchased: false,
    burnt: false,
    owner: '',
    bondNId: 1067
},
{
  BondID: 'GB068',
      Issuer: 'British Government',
    Symbol: 'UKGILT5Y',
    MaturityDate: '2027-11-01',
    CouponRate: 1.7,
    FaceValue: 14000,
    Currency: 'GBP',
    purchased: false,
    burnt: false,
    owner: '',
    bondNId: 1068
},
{
  BondID: 'GB069',
      Issuer: 'British Government',
    Symbol: 'UKGILT5Y',
    MaturityDate: '2032-07-01',
    CouponRate: 2.3,
    FaceValue: 25000,
    Currency: 'GBP',
    purchased: false,
    burnt: false,
    owner: '',
    bondNId: 1069
},
{
  BondID: 'GB070',
      Issuer: 'British Government',
    Symbol: 'UKGILT5Y',
    MaturityDate: '2035-02-01',
    CouponRate: 1.8,
    FaceValue: 16000,
    Currency: 'GBP',
    purchased: false,
    burnt: false,
    owner: '',
    bondNId: 1070
},
{
  BondID: 'GB071',
      Issuer: 'British Government',
    Symbol: 'UKGILT5Y',
    MaturityDate: '2037-07-01',
    CouponRate: 2.4,
    FaceValue: 45000,
    Currency: 'GBP',
    purchased: false,
    burnt: false,
    owner: '',
    bondNId: 1071
},
{
  BondID: 'GB072',
      Issuer: 'British Government',
    Symbol: 'UKGILT5Y',
    MaturityDate: '2028-11-01',
    CouponRate: 1.9,
    FaceValue: 50000,
    Currency: 'GBP',
    purchased: false,
    burnt: false,
    owner: '',
    bondNId: 1072
},
{
  BondID: 'GB073',
      Issuer: 'British Government',
    Symbol: 'UKGILT5Y',
    MaturityDate: '2025-09-01',
    CouponRate: 2.2,
    FaceValue: 7000,
    Currency: 'GBP',
    purchased: false,
    burnt: false,
    owner: '',
    bondNId: 1073
},
{
  BondID: 'GB074',
      Issuer: 'British Government',
    Symbol: 'UKGILT5Y',
    MaturityDate: '2038-01-01',
    CouponRate: 2.5,
    FaceValue: 60000,
    Currency: 'GBP',
    purchased: false,
    burnt: false,
    owner: '',
    bondNId: 1074
},
{
  BondID: 'GB075',
      Issuer: 'British Government',
    Symbol: 'UKGILT5Y',
    MaturityDate: '2026-06-01',
    CouponRate: 1.4,
    FaceValue: 30000,
    Currency: 'GBP',
    purchased: false,
    burnt: false,
    owner: '',
    bondNId: 1075
},
{
  BondID: 'GB076',
      Issuer: 'British Government',
    Symbol: 'UKGILT5Y',
    MaturityDate: '2030-10-01',
    CouponRate: 2,
    FaceValue: 25000,
    Currency: 'GBP',
    purchased: false,
    burnt: false,
    owner: '',
    bondNId: 1076
},
{
  BondID: 'GB077',
      Issuer: 'British Government',
    Symbol: 'UKGILT5Y',
    MaturityDate: '2033-03-01',
    CouponRate: 1.8,
    FaceValue: 32000,
    Currency: 'GBP',
    purchased: false,
    burnt: false,
    owner: '',
    bondNId: 1077
},
{
  BondID: 'GB078',
      Issuer: 'British Government',
    Symbol: 'UKGILT5Y',
    MaturityDate: '2025-12-01',
    CouponRate: 2.1,
    FaceValue: 15000,
    Currency: 'GBP',
    purchased: false,
    burnt: false,
    owner: '',
    bondNId: 1078
},
{
  BondID: 'GB079',
      Issuer: 'British Government',
    Symbol: 'UKGILT5Y',
    MaturityDate: '2032-06-01',
    CouponRate: 2.3,
    FaceValue: 9000,
    Currency: 'GBP',
    purchased: false,
    burnt: false,
    owner: '',
    bondNId: 1079
},
{
  BondID: 'GB080',
      Issuer: 'British Government',
    Symbol: 'UKGILT5Y',
    MaturityDate: '2027-10-01',
    CouponRate: 2.2,
    FaceValue: 25000,
    Currency: 'GBP',
    purchased: false,
    burnt: false,
    owner: '',
    bondNId: 1080
},
{
  BondID: 'GB081',
      Issuer: 'British Government',
    Symbol: 'UKGILT5Y',
    MaturityDate: '2029-06-01',
    CouponRate: 1.6,
    FaceValue: 17000,
    Currency: 'GBP',
    purchased: false,
    burnt: false,
    owner: '',
    bondNId: 1081
},
{
  BondID: 'GB082',
      Issuer: 'British Government',
    Symbol: 'UKGILT5Y',
    MaturityDate: '2035-07-01',
    CouponRate: 2,
    FaceValue: 28000,
    Currency: 'GBP',
    purchased: false,
    burnt: false,
    owner: '',
    bondNId: 1082
},
{
  BondID: 'GB083',
      Issuer: 'British Government',
    Symbol: 'UKGILT5Y',
    MaturityDate: '2026-03-01',
    CouponRate: 1.9,
    FaceValue: 15000,
    Currency: 'GBP',
    purchased: false,
    burnt: false,
    owner: '',
    bondNId: 1083
},
{
  BondID: 'GB084',
      Issuer: 'British Government',
    Symbol: 'UKGILT5Y',
    MaturityDate: '2033-12-01',
    CouponRate: 2.1,
    FaceValue: 70000,
    Currency: 'GBP',
    purchased: false,
    burnt: false,
    owner: '',
    bondNId: 1084
},
{
  BondID: 'GB085',
      Issuer: 'British Government',
    Symbol: 'UKGILT5Y',
    MaturityDate: '2028-01-01',
    CouponRate: 2.2,
    FaceValue: 20000,
    Currency: 'GBP',
    purchased: false,
    burnt: false,
    owner: '',
    bondNId: 1085
},
{
  BondID: 'GB086',
      Issuer: 'British Government',
    Symbol: 'UKGILT5Y',
    MaturityDate: '2031-11-01',
    CouponRate: 1.8,
    FaceValue: 30000,
    Currency: 'GBP',
    purchased: false,
    burnt: false,
    owner: '',
    bondNId: 1086
},
{
  BondID: 'GB087',
      Issuer: 'British Government',
    Symbol: 'UKGILT5Y',
    MaturityDate: '2027-07-01',
    CouponRate: 1.5,
    FaceValue: 18000,
    Currency: 'GBP',
    purchased: false,
    burnt: false,
    owner: '',
    bondNId: 1087
},
{
  BondID: 'GB088',
      Issuer: 'British Government',
    Symbol: 'UKGILT5Y',
    MaturityDate: '2034-01-01',
    CouponRate: 2,
    FaceValue: 60000,
    Currency: 'GBP',
    purchased: false,
    burnt: false,
    owner: '',
    bondNId: 1088
},
{
  BondID: 'GB089',
      Issuer: 'British Government',
    Symbol: 'UKGILT5Y',
    MaturityDate: '2039-05-01',
    CouponRate: 2.4,
    FaceValue: 50000,
    Currency: 'GBP',
    purchased: false,
    burnt: false,
    owner: '',
    bondNId: 1089
},
{
  BondID: 'GB090',
      Issuer: 'British Government',
    Symbol: 'UKGILT5Y',
    MaturityDate: '2036-06-01',
    CouponRate: 1.7,
    FaceValue: 12000,
    Currency: 'GBP',
    purchased: false,
    burnt: false,
    owner: '',
    bondNId: 1090
},
{
  BondID: 'GB091',
      Issuer: 'British Government',
    Symbol: 'UKGILT5Y',
    MaturityDate: '2025-10-01',
    CouponRate: 1.8,
    FaceValue: 25000,
    Currency: 'GBP',
    purchased: false,
    burnt: false,
    owner: '',
    bondNId: 1091
},
{
  BondID: 'GB092',
      Issuer: 'British Government',
    Symbol: 'UKGILT5Y',
    MaturityDate: '2039-08-01',
    CouponRate: 2.5,
    FaceValue: 55000,
    Currency: 'GBP',
    purchased: false,
    burnt: false,
    owner: '',
    bondNId: 1092
},
{
  BondID: 'GB093',
      Issuer: 'British Government',
    Symbol: 'UKGILT5Y',
    MaturityDate: '2030-02-01',
    CouponRate: 2.2,
    FaceValue: 30000,
    Currency: 'GBP',
    purchased: false,
    burnt: false,
    owner: '',
    bondNId: 1093
},
{
  BondID: 'GB094',
      Issuer: 'British Government',
    Symbol: 'UKGILT5Y',
    MaturityDate: '2037-01-01',
    CouponRate: 2.1,
    FaceValue: 70000,
    Currency: 'GBP',
    purchased: false,
    burnt: false,
    owner: '',
    bondNId: 1094
},
{
  BondID: 'GB095',
      Issuer: 'British Government',
    Symbol: 'UKGILT5Y',
    MaturityDate: '2034-06-01',
    CouponRate: 1.9,
    FaceValue: 25000,
    Currency: 'GBP',
    purchased: false,
    burnt: false,
    owner: '',
    bondNId: 1095
},
{
  BondID: 'GB096',
      Issuer: 'British Government',
    Symbol: 'UKGILT5Y',
    MaturityDate: '2031-07-01',
    CouponRate: 2,
    FaceValue: 40000,
    Currency: 'GBP',
    purchased: false,
    burnt: false,
    owner: '',
    bondNId: 1096
},
{
  BondID: 'GB097',
      Issuer: 'British Government',
    Symbol: 'UKGILT5Y',
    MaturityDate: '2025-07-01',
    CouponRate: 2.3,
    FaceValue: 50000,
    Currency: 'GBP',
    purchased: false,
    burnt: false,
    owner: '',
    bondNId: 1097
},
{
  BondID: 'GB098',
      Issuer: 'British Government',
    Symbol: 'UKGILT5Y',
    MaturityDate: '2027-08-01',
    CouponRate: 1.8,
    FaceValue: 16000,
    Currency: 'GBP',
    purchased: false,
    burnt: false,
    owner: '',
    bondNId: 1098
},
{
  BondID: 'GB099',
      Issuer: 'British Government',
    Symbol: 'UKGILT5Y',
    MaturityDate: '2039-02-01',
    CouponRate: 2.4,
    FaceValue: 90000,
    Currency: 'GBP',
    purchased: false,
    burnt: false,
    owner: '',
    bondNId: 1099
},
{
  BondID: 'GB100',
      Issuer: 'British Government',
    Symbol: 'UKGILT5Y',
    MaturityDate: '2037-03-01',
    CouponRate: 2.1,
    FaceValue: 45000,
    Currency: 'GBP',
    purchased: false,
    burnt: false,
    owner: '',
    bondNId: 1100
}
]

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

  const { governmentHoldingIdentity, buyerHoldingIdentity } =
    await getListOfVirtualNodes(buyerName);

  const issueTokenResponse = await issueTokenOnLedger(
    governmentHoldingIdentity,
    buyerHoldingIdentity,
    staticListOfBonds[foundBondIndex]
  );

  await new Promise((resolve) => setTimeout(resolve, 1500));

  res.json({ issueTokenResponse });
});

router.get("/list", async function (req, res, next) {
  const { name } = req.query;

  const { buyerHoldingIdentity } = await getListOfVirtualNodes(name);

  const result = await getListOfGovernmentBondsForUser(
    buyerHoldingIdentity.shortHash
  );

  const listOfOwnedGovernmentBondsOnPrivateLedgerUnformated = result;

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

  await burnTokenOnLedger(buyerHoldingIdentity, bond);

  bond.burnt = true;

  submitMessage(bond);

  res.status(200).json({
    message: "Burnt token",
  });
});

module.exports = router;
