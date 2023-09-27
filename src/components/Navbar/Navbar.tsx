import { UserButton, auth } from "@clerk/nextjs";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import {LogIn} from "lucide-react"


type Props = {};

const Navbar = async(props: Props) => {
    const {userId} = await auth();
    const isAuth = !!userId
  return (
    <div className=" bg-gradient-to-r from-green-200 via-green-300 to-blue-500 py-1.5 px-5 text-sm text-white transition-all ">
      <div className="flex justify-between w-full">
        <p className="font-bold text-4xl text-slate-800 rounded-sm ">
          Text
          <span className=" text-white bg-gradient-to-r from-green-300 to-purple-400 rounded-sm ">
            Klar!
          </span>
        </p>
        {!isAuth ? (
            <>
            <Link href="/sign-in">
            <Button variant={"secondary"}>
                Sign in <LogIn className="w-4 h-4 ml-2"/>
            </Button>
            </Link>
            </>
        ): (
            <>
            <UserButton afterSignOutUrl="/"/>
            </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
