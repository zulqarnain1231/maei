import React, { useEffect, useState } from "react";
import WalletCard from "./WalletCard";
import SecurityCard from "./SecurityCard";
import { Table } from "@mantine/core";
import { Select } from "@mantine/core";
import { FiChevronDown } from "react-icons/fi";
import Image from "next/image";
import MantineTable from "@/components/Shared/MantineTable";
const TokensExchangeTable = () => {
  const elements = [
    {
      no: 1,
      asset: "EW1",
      amount: 2,
      price: "$1,890.09",
    },
    {
      no: 2,
      asset: "EW1",
      amount: 2,
      price: "$1,890.09",
    },
    {
      no: 3,
      asset: "EW1",
      amount: 2,
      price: "$1,890.09",
    },
    {
      no: 4,
      asset: "EW1",
      amount: 2,
      price: "$1,890.09",
    },
  ];
  return (
    <MantineTable title="Token Exchange">
      <div className="w-full overflow-auto flex flex-col items-center justify-start gap-4">
        <thead className="w-full min-w-[630px]">
          <tr className=" w-full grid grid-cols-[.5fr,1fr,1fr,1fr,1fr] place-items-start">
            <th className="text-xs text-gray-main font-semibold font-manrope">
              No
            </th>
            <th className="text-xs text-gray-main font-semibold font-manrope">
              Asset
            </th>
            <th className="text-xs text-gray-main font-semibold font-manrope">
              Amount
            </th>
            <th className="text-xs text-gray-main font-semibold font-manrope">
              Price
            </th>
            <th></th>
          </tr>
        </thead>
        <tbody className="w-full flex flex-col items-center justify-start gap-3 min-w-[630px] font-manrope">
          {elements.map((element: any, index: number) => (
            <tr
              key={index}
              className="w-full grid grid-cols-[.5fr,1fr,1fr,1fr,1fr] place-items-start"
            >
              <td className="text-black text-xs font-semibold">{element.no}</td>
              <td className="w-full flex items-center justify-start gap-2 text-black text-xs font-[700]">
                {element.asset}
              </td>
              <td className="text-sm text-black font-semibold">
                {element.amount}
              </td>
              <td className="text-sm text-black font-semibold">
                {element.price}
              </td>
              <td className="w-full flex items-center justify-end">
                <button className="w-[60px] h-[24px] flex items-center justify-center text-white text-[10px] font-semibold rounded bg-black">
                  Buy
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </div>
    </MantineTable>
  );
};

export default TokensExchangeTable;
