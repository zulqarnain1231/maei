import React, { useEffect, useState } from "react";
import WalletCard from "./WalletCard";
import SecurityCard from "./SecurityCard";
import { Table } from "@mantine/core";
import { Select } from "@mantine/core";
import { FiChevronDown } from "react-icons/fi";
import Image from "next/image";
import MantineTable from "@/components/Shared/MantineTable";
const AssetsTable = () => {
  const elements = [
    {
      no: 1,
      ticketer: "TESTCORP",
      logo: "/AssetTicker/Test.png",
      balance: "$1,890.09",
    },
    {
      no: 2,
      ticketer: "NEXUSCORP",
      logo: "/AssetTicker/Nexus.png",
      balance: "$1,890.09",
    },
    {
      no: 3,
      ticketer: "PLANET01",
      logo: "/AssetTicker/Planet.png",
      balance: "$1,890.09",
    },
    {
      no: 4,
      ticketer: "SOLARATECH",
      logo: "/AssetTicker/Solar.png",
      balance: "$1,890.09",
    },
  ];
  return (
    <MantineTable title="My Assets">
      <div className="w-full overflow-auto flex flex-col items-center justify-start gap-4">
        <thead className="w-full min-w-[630px]">
          <tr className=" w-full grid grid-cols-[.5fr,1fr,1fr,1fr] place-items-start">
            <th className="text-xs text-gray-main font-semibold font-manrope">
              No
            </th>
            <th className="text-xs text-gray-main font-semibold font-manrope">
              Asset Ticker
            </th>
            <th className="text-xs text-gray-main font-semibold font-manrope">
              Balance
            </th>
            <th></th>
          </tr>
        </thead>
        <tbody className="w-full flex flex-col items-center justify-start gap-3 min-w-[630px] font-manrope">
          {elements.map((element: any, index: number) => (
            <tr
              key={index}
              className="w-full grid grid-cols-[.5fr,1fr,1fr,1fr] place-items-start"
            >
              <td className="text-black text-xs font-semibold">{element.no}</td>
              <td className="w-full flex items-center justify-start gap-2 text-black text-xs font-[700]">
                <div className="relative h-[23px] w-[23px] rounded-full">
                  <Image
                    src={element.logo}
                    className="w-full h-full object-cover rounded-full"
                    alt=""
                    fill
                  />
                </div>
                {element.ticketer}
              </td>
              <td className="text-sm text-black font-semibold">
                {element.balance}
              </td>
              <td className="w-full flex items-center justify-end">
                <button className="w-[60px] h-[24px] flex items-center justify-center text-gray-800 text-[10px] font-semibold rounded border">
                  Sell
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </div>
    </MantineTable>
  );
};

export default AssetsTable;
