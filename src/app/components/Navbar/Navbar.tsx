'use client'
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Navbar = () => {
  const [isAuth, setIsAuth] = useState(true);

  return (
    <div className="flex justify-between items-center px-4 py-2 bg-gradient-to-l from-slate-50 to-green-100">
      <Link href={"/"} className="text-lg font-bold">
        LOGO
      </Link>
      <div className="flex gap-4 items-center">
        <Link href={"/list-your-property"}>
          <Button variant="outline" className="hover:bg-[#3E937F] hover:text-white">
            List your property
          </Button>
        </Link>
        {!isAuth ? (
          <Link href={"/login"}>
            <Button className="bg-[#3E937F] hover:bg-[#2e6f60]">
              Log In
            </Button>
          </Link>
        ) : (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/images/flag.png" alt="User Avatar" />
                  <AvatarFallback>U</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-44" align="end" sideOffset={10} forceMount>
              <DropdownMenuItem>
                <Link href="/">Edit Profile</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/">Saved</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/">Chats</Link>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setIsAuth(false)}>
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      </div>
    </div>
  );
};

export default Navbar;