import React from "react";
import WalletCard from "./WalletCard";
import SecurityCard from "./SecurityCard";
import { Table } from "@mantine/core";
import { Select } from "@mantine/core";
import { FiChevronDown } from "react-icons/fi";
const MainPage = () => {
  return (
    <div className="w-full h-full bg-[url('/DashboardBg.png')] bg-no-repeat bg-cover md:px-10 px-4 py-1">
      <div className="w-full h-full grid lg:grid-cols-[1fr,2fr] lg:gap-4 gap-6">
        {/* left side */}
        <div className="w-full h-full flex flex-col items-center justify-start gap-6">
          <WalletCard />
          <SecurityCard />
        </div>
        {/* right side */}
        <div className="w-full h-full flex flex-col items-center justify-start gap-6 font-manrope">
          <Table
            horizontalSpacing="sm"
            verticalSpacing="sm"
            className="w-full shadow-xl rounded-xl font-manrope bg-white"
          >
            <div className="w-full flex flex-col items-center justify-start gap-4 p-8">
              <div className="w-full flex items-center justify-between">
                <p className="text-black text-base font-semibold">My Assets</p>
                <div className="w-[100px] h-[36px]">
                  <Select
                    placeholder="All"
                    className="font-manrope"
                    classNames={{
                      root: "font-manrope",
                      input: "placeholder:text-black",
                    }}
                    rightSection={
                      <FiChevronDown className="text-[20px] cursor-pointer text-gray-main" />
                    }
                    data={[
                      { value: "react", label: "React" },
                      { value: "ng", label: "Angular" },
                      { value: "svelte", label: "Svelte" },
                      { value: "vue", label: "Vue" },
                    ]}
                  />
                </div>
              </div>
            </div>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
