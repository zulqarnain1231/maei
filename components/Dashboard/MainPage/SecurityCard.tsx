import React from "react";
import { Card } from "@mantine/core";
const SecurityCard = () => {
  return (
    <Card
      shadow="lg"
      padding="xl"
      radius="lg"
      className="bg-white w-full overflow-hidden"
    >
      <div className="w-full h-full flex flex-col items-start justify-start gap-6">
        <div className="w-full flex items-center justify-start py-4 border-b-[2px] border-b-gray-300">
          <h2 className="text-base text-black font-bold font-manrope">
            Security Token
          </h2>
        </div>
        <div className="w-full flex flex-col items-start justify-start gap-2">
          <h2 className="text-base text-black font-bold font-manrope">EW1</h2>
          <p className="text-xs text-gray-main font-medium font-manrope">
            Electricity Wizard
          </p>
        </div>
        <div className="w-full flex flex-col items-start justify-start gap-2">
          <h2 className="text-base text-black font-bold font-manrope">EW2</h2>
          <p className="text-xs text-gray-main font-medium font-manrope">
            Electricity Wizard 2
          </p>
        </div>
        <div className="w-full flex flex-col items-start justify-start gap-2">
          <h2 className="text-base text-black font-bold font-manrope">PLA1</h2>
          <p className="text-xs text-gray-main font-medium font-manrope">
            Electricity Wizard 2
          </p>
        </div>
        <div className="w-full flex flex-col items-start justify-start gap-2">
          <h2 className="text-base text-black font-bold font-manrope">SOL1</h2>
          <p className="text-xs text-gray-main font-medium font-manrope">
            Electricity Wizard 2
          </p>
        </div>
      </div>
    </Card>
  );
};

export default SecurityCard;
