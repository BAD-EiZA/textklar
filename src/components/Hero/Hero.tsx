import React from "react";
import { Button } from "@/components/ui/button";
import { auth } from "@clerk/nextjs";
import ContainerModel from "@/components/Models/ContainerModel";
import FileUpload from "../FileUpload/FileUpload";
type Props = {};

const Hero = async (props: Props) => {
  const { userId } = await auth();
  const isAuth = !!userId;
  return (
    <div className="h-[528px] grid grid-cols-1 lg:grid-cols-2  items-center">
      <div className="h-full flex flex-col  justify-center px-6">
        <p className="text-2xl font-semibold   sm:text-5xl text-centercapitalize">
          Chat with{" "}
          <span className="text-white bg-gradient-to-r from-green-300 to-purple-400 rounded-sm">
            MavisAI
          </span>
          , and let it analyze your{" "}
          <span className="font-bold text-white">PDFs</span> seamlessly.
        </p>
        <div className=" ">{isAuth && <FileUpload />}</div>
      </div>
      <div className=" w-full flex items-center magicpattern">
        <div className=" h-full flex items-center w-full">
          <ContainerModel />
        </div>
      </div>
    </div>
  );
};

export default Hero;
