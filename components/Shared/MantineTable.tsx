import React from "react";
import { Table, Select } from "@mantine/core";
import { FiChevronDown } from "react-icons/fi";

interface Props {
  title: string;
  children: React.ReactNode;
}
const MantineTable: React.FC<Props> = ({ title, children }) => {
  return (
    <Table
      horizontalSpacing="sm"
      verticalSpacing="sm"
      className="w-full shadow-xl rounded-xl font-manrope bg-white "
    >
      <div className="w-full flex flex-col items-center justify-start gap-4 p-8 overflow-auto">
        <div className="w-full flex items-center justify-between">
          <p className="text-black text-base font-semibold">{title}</p>
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
        {children}
      </div>
    </Table>
  );
};

export default MantineTable;
