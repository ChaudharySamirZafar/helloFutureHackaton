"use client";
import Link from "next/link";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import { error } from "console";

export default function BondsPage() {
  const [myBonds, setMyBonds] = useState([]);

  useEffect(() => {
    const getAllMyBonds = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      const allMyBonds = await listAllMyBonds("Samir");
      setMyBonds(allMyBonds);
    };

    getAllMyBonds();
  }, []);

  return (
    <main className="bg-white min-h-screen w-full flex flex-col items-center">
      <Navbar />
      <div className="flex flex-col max-w-7xl w-full min-h-full text-black items-center px-16 py-8 gap-4">
        <h1 className="text-2xl font-bold">
          Bonds you have successfully purchased
        </h1>
        <div className="flex flex-col">
          {myBonds.map((ownedBond: any) => {
            return (
              <div className="flex flex-col border-2 px-4 py-6 rounded-lg text-black">
                <h1>Issuer: {ownedBond.issuerCommonName}</h1>
                <h1>Owner: {ownedBond.ownerCommonName}</h1>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
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
