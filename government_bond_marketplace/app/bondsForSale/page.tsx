import Navbar from "../components/Navbar";
import { redirect } from "next/navigation";

export default async function BondsPage() {
  const bonds = await getAllBonds();

  return (
    <main className="bg-white min-h-screen w-full flex flex-col items-center">
      <Navbar />
      <div className="flex flex-col max-w-7xl w-full min-h-full text-black items-center px-16 py-8 gap-4">
        <h1 className="text-2xl font-bold">Bonds Currently For Sale</h1>
        {bonds.map((bond: any, index: number) => {
          return <Bond bond={bond} />;
        })}
      </div>
    </main>
  );
}

export function Bond({ bond }: { bond: any }) {
  const onBuyNowClicked = async () => {
    "use server";

    await buyBond("Samir", bond.BondID);

    redirect("./myBonds");
  };

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
      <form action={onBuyNowClicked}>
        <button className="border-2 p-1.5 rounded-md hover:cursor-pointer">
          Buy Now
        </button>
      </form>
    </div>
  );
}

async function buyBond(userName: string, bondId: string) {
  const requestBody = {
    buyerName: userName,
    bondId: bondId,
  };

  const request = await fetch("http://localhost:4000/bonds/buy", {
    method: "POST",
    headers: {
      "Content-Type": "application/json", // Added Content-Type header
    },
    body: JSON.stringify(requestBody),
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data;
    });

  return request;
}

async function getAllBonds() {
  const request = await fetch("http://localhost:4000/bonds")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data;
    });

  return request;
}
