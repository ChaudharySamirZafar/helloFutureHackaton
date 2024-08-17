"use client";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function BondsPage() {
  const [myPrivateBonds, setMyPrivateBonds] = useState([]);
  const [myPublicBonds, setMyPublicBonds] = useState([]);
  const [loading, setLoading] = useState(true);

  const getAllMyBonds = async () => {
    const allMyBonds = await listAllMyBonds("Samir");

    console.log(allMyBonds);

    const publicBonds = allMyBonds.filter((bond: any) => {
      return bond?.public ?? false;
    });
    const privateBonds = allMyBonds.filter((bond: any) => {
      return bond?.public === false ?? false;
    });

    setMyPrivateBonds(privateBonds);
    setMyPublicBonds(publicBonds);
  };

  useEffect(() => {
    const getBonds = async () => {
      await getAllMyBonds();
      setLoading(false);
    };

    getBonds();
  }, []);

  const onSwitchToPublicBlockchainClicked = async (bondId: string) => {
    setLoading(true);

    console.log(bondId);
    await burnToken("Samir", bondId);
    await getAllMyBonds();

    setLoading(false);
  };

  return (
    <main className="bg-white min-h-screen w-full flex flex-col items-center">
      <Navbar />
      <div className="flex flex-col max-w-7xl w-full min-h-full text-black items-center px-16 py-8 gap-4">
        <h1 className="text-2xl font-bold">
          Bonds you have successfully purchased
        </h1>
        {loading && (
          <div className="text-center">
            <div role="status">
              <svg
                aria-hidden="true"
                className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        )}
        {!loading &&
          myPrivateBonds.length === 0 &&
          myPublicBonds.length === 0 && (
            <h1>
              You have no purchased bonds.. please buy one in the marketplace{" "}
              <Link className="text-blue-700 underline" href="/bondsForSale">
                here
              </Link>
            </h1>
          )}
        {!loading && myPrivateBonds && myPrivateBonds.length > 0 && (
          <div className="flex flex-col w-full">
            <h1 className="font-bold text-lg mb-2">Private blockchain</h1>
            {myPrivateBonds?.map((ownedBond: any) => {
              return (
                <div
                  className="flex flex-col border-2 px-4 py-6 rounded-lg text-black mb-4"
                  key={ownedBond.bondId}
                >
                  <h1>Issuer: {ownedBond.issuerCommonName}</h1>
                  <h1>Owner: {ownedBond.ownerCommonName}</h1>
                  <h1>Face Value: £{ownedBond.value}</h1>
                  <h1>CouponRate: {ownedBond.couponRate}%</h1>
                  <h1>Maturity Date: {ownedBond.maturityDate}</h1>
                  <h1>Currency: {ownedBond.currency}</h1>
                  <button
                    className="border-2 p-1.5 rounded-md hover:cursor-pointer"
                    type="submit"
                    onClick={() =>
                      onSwitchToPublicBlockchainClicked(ownedBond.bondId)
                    }
                  >
                    Switch to Public Blockchain
                  </button>
                </div>
              );
            })}
          </div>
        )}
        {!loading && myPublicBonds && myPublicBonds.length > 0 && (
          <div className="flex flex-col  w-full">
            <h1 className="font-bold text-lg mb-2">Public blockchain</h1>
            {myPublicBonds?.map((ownedBond: any) => {
              return (
                <div
                  className="flex flex-col border-2 px-4 py-6 rounded-lg text-black mb-4"
                  key={ownedBond.bondId}
                >
                  <h1>Issuer: {ownedBond.issuerCommonName}</h1>
                  <h1>Owner: {ownedBond.ownerCommonName}</h1>
                  <h1>Face Value: £{ownedBond.value}</h1>
                  <h1>CouponRate: {ownedBond.couponRate}%</h1>
                  <h1>Maturity Date: {ownedBond.maturityDate}</h1>
                  <h1>Currency: {ownedBond.currency}</h1>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </main>
  );
}

async function burnToken(userName: string, bondId: string) {
  const requestBody = {
    ownerName: userName,
    bondId: bondId,
  };

  const request = await fetch("http://localhost:4000/bonds/burn", {
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
      console.log("Returned Data...");
      console.log(data);
      return data;
    });

  return request;
}

async function listAllMyBonds(username: string) {
  const request = await fetch(
    `http://localhost:4000/bonds/list?name=${username}`
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      throw new Error(error);
    });

  return request;
}
