import React from "react";
import { Card } from "@mantine/core";
import { IoWalletOutline } from "react-icons/io5";
import { IoIosInformationCircle } from "react-icons/io";
import Image from "next/image";
const WalletCard = () => {
  return (
    <Card
      shadow="lg"
      padding="xl"
      radius="lg"
      className="bg-brand-secondary w-full overflow-hidden"
    >
      <div className="w-full flex flex-col items-start justify-start gap-12 relative">
        <div className="absolute h-[190px] w-[170px] -top-20 -left-10">
          <div className="w-full h-full relative">
            <Image
              className="objecct-cover w-full h-full"
              src={"/Hexagon.png"}
              alt=""
              fill
            />
          </div>
        </div>
        <div className="w-full flex flex-col items-start justify-start gap-4 z-10">
          <div className="w-full flex items-center justify-start gap-2">
            <IoWalletOutline className="text-[24px] text-white" />
            <p className="text-white text-sm font-normal font-manrope">
              Wallet
            </p>
          </div>
          <div className="w-full flex items-end justify-start gap-2">
            <p className="text-white text-4xl font-bold font-manrope">
              213,908.98
            </p>
            <p className="text-white text-base font-manrope font-bold">Maei</p>
            <IoIosInformationCircle className="text-[24px] text-gray-400" />
          </div>
        </div>
        <div className="w-full flex items-center justify-start gap-6 z-10">
          <button className="flex items-center justify-center bg-gradient-to-r from-[#FFC243] via-[#FFD784] to-[#FFC243] rounded-[9px] text-base text-black font-manrope font-bold py-2 px-8">
            Deposit
          </button>
          <button className="flex items-center justify-center bg-white rounded-[9px] text-base text-black font-manrope font-bold py-2 px-8">
            Withdraw
          </button>
        </div>
      </div>
    </Card>
  );
};

export default WalletCard;
