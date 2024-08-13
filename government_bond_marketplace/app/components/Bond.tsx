export default function Bond({ bond }: { bond: any }) {
  console.log(bond);

  return (
    <div className="bg-white shadow-lg w-full rounded-lg px-8 py-4">
      <h1 className="text-2xl font-bold opacity-60">{bond.BondID}</h1>
      <h1 className="text-1xl font-semibold">
        Maturity Date: {bond.MaturityDate}
      </h1>
      <h1 className="text-1xl font-semibold">
        Coupon Rate: {bond.CouponRate}%
      </h1>
      <h1 className="text-1xl font-semibold">Face Value: £{bond.FaceValue}</h1>
      <h1 className="text-md font-bold opacity-60">
        Currency: {bond.Currency}
      </h1>
      <button className="border-2 p-1.5 rounded-md hover:cursor-pointer">
        Buy Now
      </button>
    </div>
  );
}
