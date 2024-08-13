import Link from "next/link";
import Navbar from "../components/Navbar";

export default async function BondsPage() {
  return (
    <main className="bg-white min-h-screen w-full flex flex-col items-center">
      <Navbar />
      <div className="flex flex-col max-w-7xl w-full min-h-full text-black items-center px-16 py-8 gap-4">
        <h1 className="text-2xl font-bold">
          Bonds you have successfully purchased
        </h1>
      </div>
    </main>
  );
}
