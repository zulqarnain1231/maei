import React from "react";
import { Card } from "@mantine/core";
import Divider from "@/components/Shared/Divider";
const HistoryCard = () => {
  return (
    <Card
      shadow="lg"
      padding="xl"
      radius="lg"
      className="bg-white w-full overflow-hidden h-[150px]"
    >
      <div className="w-full flex flex-col items-start justify-start gap-3 font-manrope">
        <p className="text-black text-base font-bold">Transaction History</p>
        <Divider />
        <p className="text-xs text-brand-secondary cursor-pointer font-normal">
          Deposit & Withdrawal History
        </p>
        <p className="text-xs text-[#1B1B1B] hover:text-brand-secondary cursor-pointer font-normal">
          STO Investment History
        </p>
      </div>
    </Card>
  );
};

export default HistoryCard;
