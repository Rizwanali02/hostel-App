import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-4 py-2 bg-gradient-to-l from-slate-50 to-green-100">
      <Link href={"/"} className="text-lg font-bold">
        LOGO
      </Link>
      <div className="flex gap-4">
        <Link href={"/list-your-property"}>
          <Button variant="outline" className="hover:bg-[#3E937F] hover:text-white">
            List your property
          </Button>
        </Link>
        <Link href={"/login"}>
          <Button className="bg-[#3E937F] hover:bg-[#2e6f60]">
            Log In
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
