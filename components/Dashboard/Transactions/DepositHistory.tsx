import React from "react";
import MantineTable from "@/components/Shared/MantineTable";
import Divider from "@/components/Shared/Divider";
import { BsArrowDown, BsArrowUp } from "react-icons/bs";

const DepositHistory = () => {
  const elements = [
    {
      no: 1,
      date: "04 Nov 2022",
      ticketer: "TESTCORP",
      logo: "/AssetTicker/Test.png",
      status: "Confirmed",
      type: "Received",
      value: "$1,890.09",
    },
    {
      no: 2,
      date: "12 Dec 2022",
      ticketer: "NEXUSCORP",
      logo: "/AssetTicker/Nexus.png",
      status: "Failed",
      type: "Sent",
      value: "$1,890.09",
    },
    {
      no: 3,
      date: "12 Jan 2022",
      ticketer: "PLANET01",
      logo: "/AssetTicker/Planet.png",
      status: "Pending",
      type: "Received",
      value: "$1,890.09",
    },
    {
      no: 4,
      date: "12 Dec 2022",
      ticketer: "SOLARATECH",
      logo: "/AssetTicker/Solar.png",
      status: "Pending",
      type: "Sent",
      value: "$1,890.09",
    },
    {
      no: 5,
      date: "12 Dec 2022",
      ticketer: "TESTCORP",
      logo: "/AssetTicker/Test.png",
      status: "Confirmed",
      type: "Sent",
      value: "$1,890.09",
    },
    {
      no: 6,
      date: "12 Dec 2022",
      ticketer: "NEXUSCORP",
      logo: "/AssetTicker/Nexus.png",
      status: "Pending",
      type: "Received",
      value: "$1,890.09",
    },
    {
      no: 7,
      date: "12 Dec 2022",
      ticketer: "PLANET01",
      logo: "/AssetTicker/Planet.png",
      status: "Confirmed",
      type: "Received",
      value: "$1,890.09",
    },
    {
      no: 8,
      date: "12 Dec 2022",
      ticketer: "SOLARATECH",
      logo: "/AssetTicker/Solar.png",
      status: "Confirmed",
      type: "Sent",
      value: "$1,890.09",
    },
    {
      no: 9,
      date: "12 Dec 2022",
      ticketer: "SOLARATECH",
      logo: "/AssetTicker/Solar.png",
      status: "Confirmed",
      type: "Sent",
      value: "$1,890.09",
    },
    {
      no: 10,
      date: "12 Dec 2022",
      ticketer: "SOLARATECH",
      logo: "/AssetTicker/Solar.png",
      status: "Failed",
      type: "Received",
      value: "$1,890.09",
    },
  ];
  return (
    <MantineTable title="Deposit & Withdrawal History">
      <div className="w-full overflow-auto flex flex-col items-center justify-start gap-4">
        <thead className="w-full">
          <tr className=" w-full grid sm:grid-cols-[.5fr,1fr,1fr,1fr,1fr] grid-cols-[.5fr,1fr,1fr,1fr] place-items-start">
            <th className="text-xs text-gray-main font-semibold font-manrope">
              No
            </th>
            <th className="text-xs text-gray-main font-semibold font-manrope">
              Date Received
            </th>
            <th className="text-xs text-gray-main font-semibold font-manrope">
              Status
            </th>
            <th className="text-xs sm:inline-block hidden text-gray-main font-semibold font-manrope">
              Type
            </th>
            <th className="text-xs text-gray-main font-semibold font-manrope">
              Value
            </th>
          </tr>
        </thead>
        <tbody className="w-full h-full overflow-auto flex flex-col items-center justify-start gap-3 font-manrope ThinScrollbar">
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
                  {element.date}
                </td>
                <td
                  className={`py-[2px] px-[10px] rounded ${
                    element.status == "Pending"
                      ? "bg-[#FFF0D8] text-[#ED9E1F]"
                      : element.status == "Confirmed"
                      ? "bg-[#D4FFE6] text-[#27AE60]"
                      : "bg-[#FFDDDD] text-[#EB5757]"
                  } text-xs flex items-center justify-center  font-semibold`}
                >
                  {element.status}
                </td>
                <td className="w-full sm:flex hidden items-center justify-start gap-2">
                  <span
                    className={`rounded-full h-[18px] w-[18px] flex items-center justify-center ${
                      element.type == "Received"
                        ? "bg-[#D4FFE6]"
                        : "bg-[#FFDDDD]"
                    }`}
                  >
                    {element.type == "Received" ? (
                      <BsArrowDown className="text-[10px] text-[#EB5757]" />
                    ) : (
                      <BsArrowUp className="text-[10px] text-[#27AE60]" />
                    )}
                  </span>
                  <p className="text-black text-xs font-semibold">
                    {element.type}
                  </p>
                </td>
                <td className="w-full flex items-center justify-start gap-2 text-black text-xs font-[700]">
                  {element.value}
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

export default DepositHistory;
