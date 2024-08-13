"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathName = usePathname();
  console.log(pathName);

  return (
    <div className="flex flex-row justify-center gap-4 max-w-7xl w-full text-black font-semibold py-4 border-b-2">
      <Link
        className={
          pathName === "/bondsForSale"
            ? "hover:opacity-60 underline decoration-black/60"
            : "hover:opacity-60"
        }
        href="/bondsForSale"
      >
        Bonds For Sale
      </Link>
      <Link
        className={
          pathName === "/myBonds"
            ? "hover:opacity-60 underline decoration-black/60"
            : "hover:opacity-60"
        }
        href="/myBonds"
      >
        My Bonds
      </Link>
    </div>
  );
}
