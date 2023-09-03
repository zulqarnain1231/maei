"use client";
import React, { useEffect, useState } from "react";
import WalletCard from "./WalletCard";
import SecurityCard from "./SecurityCard";
import { Table } from "@mantine/core";
import { Select } from "@mantine/core";
import { FiChevronDown } from "react-icons/fi";
import Image from "next/image";
import MantineTable from "@/components/Shared/MantineTable";
import AssetsTable from "./AssetsTable";
import TokensExchangeTable from "./TokenExxhangeTable";
const MainPage = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="w-full h-full bg-[url('/DashboardBg.png')] bg-no-repeat bg-cover md:px-10 px-4 py-1">
      <div className="w-full h-full grid lg:grid-cols-[1fr,2fr] lg:gap-4 gap-6">
        {/* left side */}
        <div className="w-full h-full flex flex-col items-center justify-start gap-6">
          <WalletCard />
          <SecurityCard />
        </div>
        {/* right side */}
        {isClient && (
          <div className="w-full h-full flex flex-col items-center justify-start gap-6 font-manrope">
            <AssetsTable />
            <TokensExchangeTable />
          </div>
        )}
      </div>
    </div>
  );
};

export default MainPage;
