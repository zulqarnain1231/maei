import React from "react";

import MantineTable from "@/components/Shared/MantineTable";
import Divider from "@/components/Shared/Divider";
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
    {
      no: 5,
      asset: "EW1",
      amount: 2,
      price: "$1,890.09",
    },
    {
      no: 6,
      asset: "EW1",
      amount: 2,
      price: "$1,890.09",
    },
    {
      no: 7,
      asset: "EW1",
      amount: 2,
      price: "$1,890.09",
    },
  ];
  return (
    <MantineTable title="Token Exchange">
      <div className="w-full overflow-auto flex flex-col items-center justify-start gap-4">
        <thead className="w-full">
          <tr className=" w-full grid sm:grid-cols-[.5fr,1fr,1fr,1fr,1fr] grid-cols-[.5fr,1fr,1fr,1fr] place-items-start">
            <th className="text-xs text-gray-main font-semibold font-manrope">
              No
            </th>
            <th className="text-xs text-gray-main font-semibold font-manrope">
              Asset
            </th>
            <th className="text-xs sm:inline-block hidden text-gray-main font-semibold font-manrope">
              Amount
            </th>
            <th className="text-xs text-gray-main font-semibold font-manrope">
              Price
            </th>
            <th></th>
          </tr>
        </thead>

        <tbody className="w-full max-h-[200px] overflow-auto flex flex-col items-center justify-start gap-3 font-manrope ThinScrollbar">
          {elements.map((element: any, index: number) => (
            <div
              key={index}
              className="w-full flex flex-col items-center justify-start gap-2"
            >
              <tr className="w-full grid sm:grid-cols-[.5fr,1fr,1fr,1fr,1fr] grid-cols-[.5fr,1fr,1fr,1fr] place-items-start">
                <td className="text-black text-xs font-semibold">
                  {element.no}
                </td>
                <td className="w-full flex items-center justify-start gap-2 text-black text-xs font-[700]">
                  {element.asset}
                </td>
                <td className="text-sm sm:inline-block hidden text-black font-semibold">
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
              {index < elements.length - 1 && <Divider />}
            </div>
          ))}
        </tbody>
      </div>
    </MantineTable>
  );
};

export default TokensExchangeTable;
