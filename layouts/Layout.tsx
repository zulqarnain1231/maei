import React from "react";
import { useRouter } from "next/router";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import { Avatar } from "@mantine/core";
import DashboardSideBar from "./DashboardSideBar";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  children?: React.ReactNode;
}
const Layout: React.FC<Props> = ({ children }: Props) => {
  const Router = useRouter();
  const showSideBar = Router.pathname.includes("dashboard");
  return (
    <React.Fragment>
      {!showSideBar && (
        <main className={`w-full min-h-screen ${inter.className}`}>
          {children}
        </main>
      )}{" "}
      {showSideBar && (
        <div
          className={`w-full h-full md:h-screen md:grid md:grid-cols-[230px,calc(100%-230px)] flex flex-col gap-6 md:gap-0
        `}
        >
          <DashboardSideBar />
          <main className="w-full h-full flex flex-col items-center justify-start gap-4 md:h-screen overflow-y-auto bg-gray-100/30 font-manrope md:mt-0 mt-20">
            <div className="w-full flex sm:flex-row flex-col sm:gap-0 gap-2 sm:items-center items-start sm:justify-between justify-start md:px-10 px-4 py-4">
              <div className="flex flex-col items-start justify-start gap-2">
                <h2 className="text-2xl text-black font-bold">
                  Welcome back, Nola!
                </h2>
                <p className="text-sm font-normal text-gray-main">
                  Maei User Wallet
                </p>
              </div>
              <div className="flex items-center justify-start gap-3">
                <p className="text-base text-black font-medium">David Gilmor</p>
                <Avatar
                  classNames={{
                    root: "bg-blue-600 cursor-pointer",
                    placeholder:
                      "text-white font-manrope font-medium bg-blue-600 border-none",
                  }}
                  radius="xl"
                >
                  NR
                </Avatar>
                <BsChevronDown className="text-[18px] cursor-pointer" />
              </div>
            </div>
            {children}
          </main>
        </div>
      )}
    </React.Fragment>
  );
};

export default Layout;
