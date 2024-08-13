import Bond from "../components/Bond";
import Navbar from "../components/Navbar";

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
