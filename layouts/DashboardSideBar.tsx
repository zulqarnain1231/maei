import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import { Drawer } from "@mantine/core";
import { BiMenuAltRight } from "react-icons/bi";
import { MdLogout } from "react-icons/md";
import { IoShieldCheckmarkOutline, IoSettingsOutline } from "react-icons/io5";
import { BsBarChart } from "react-icons/bs";
import { GoHome } from "react-icons/go";
import { RiExchangeDollarFill } from "react-icons/ri";

const DashboardSideBar = () => {
  const Router = useRouter();
  const [isOpen, setIsOpen] = React.useState(false);
  const [isLogoutOpen, setIsLogoutOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  const dashboardNavigation = [
    {
      Name: "Home",
      Route: "/dashboard",
      icon: <GoHome className={`text-[26px]`} />,
    },
    {
      Name: "Security Tokens",
      Route: "#",
      icon: <IoShieldCheckmarkOutline className={`text-[24px]`} />,
    },
    {
      Name: "Token Exchange",
      Route: "#",
      icon: <BsBarChart className={`text-[24px]`} />,
    },

    {
      Name: "Transactions",
      Route: "/dashboard/transactions",
      icon: <RiExchangeDollarFill className="text-[26px]" />,
    },
  ];

  return (
    <div className="bg-white fixed md:relative md:w-auto w-full z-20 shadow-xl font-manrope">
      <div className="w-full md:h-full flex justify-between items-center md:flex-col md:p-5 p-4">
        <div className="md:flex flex-col hidden justify-start items-center">
          {/* Logo */}
          <Link href={"/"} className="relative w-[102px] h-[50px] ">
            <Image src={"/Logo.png"} alt="" fill className="object-contain" />
          </Link>

          {/* NavItems */}
          <div className="flex justify-center items-center flex-col gap-4 mt-12">
            {dashboardNavigation?.map((item: any, index: number) => {
              return (
                <Link
                  key={index}
                  href={item.Route}
                  className={`w-[170px] px-3 py-4 flex items-center justify-start gap-2 group  text-sm font-medium rounded-xl ${
                    item.Route === Router.pathname
                      ? "text-white bg-gradient-to-b from-brand-main to-brand-secondary"
                      : " hover:text-white hover:bg-gradient-to-b from-brand-main to-brand-secondary"
                  }`}
                >
                  {item.icon}
                  {item.Name}
                </Link>
              );
            })}
          </div>
        </div>
        <div className="w-full md:flex hidden flex-col items-center justify-start gap-2">
          <Link
            href={"#"}
            className={`w-[170px] px-3 py-4 flex items-center justify-start gap-2 group  text-sm font-medium rounded-xl ${
              "#" === Router.pathname
                ? "text-white bg-gradient-to-b from-brand-main to-brand-secondary"
                : " hover:text-white hover:bg-gradient-to-b from-brand-main to-brand-secondary"
            }`}
          >
            <IoSettingsOutline className="text-[24px]" />
            Setting
          </Link>
          <Link
            href={"#"}
            className={`w-[170px] px-3 py-4 flex items-center justify-start gap-2 group  text-sm font-medium rounded-xl ${
              "#" === Router.pathname
                ? "text-white bg-gradient-to-b from-brand-main to-brand-secondary"
                : " hover:text-white hover:bg-gradient-to-b from-brand-main to-brand-secondary"
            }`}
          >
            <MdLogout className="text-[24px]" />
            Logout
          </Link>
        </div>
        {/* For Phone */}
        {/* Logo */}
        <Link
          href={"/"}
          className="relative md:hidden inline-block w-[80px] h-[40px] "
        >
          <Image src={"/Logo.png"} alt="" fill className="object-contain" />
        </Link>
        <BiMenuAltRight
          onClick={toggleDrawer}
          className="text-[24px] md:hidden inline-block"
        />
      </div>

      <Drawer
        opened={isOpen}
        onClose={toggleDrawer}
        position="left"
        size="100%"
      >
        <div className="w-full h-full flex justify-between items-center flex-col overflow-auto gap-4 p-4">
          <div className="w-full flex justify-start items-center flex-col gap-6">
            {/* Logo */}
            <Link href={"/"} className="relative w-[102px] h-[50px] ">
              <Image src={"/Logo.png"} alt="" fill className="object-contain" />
            </Link>

            {/* NavItems */}
            <div className="w-full flex justify-center items-center flex-col gap-4 mt-12">
              {dashboardNavigation?.map((item: any, index: number) => {
                return (
                  <Link
                    onClick={toggleDrawer}
                    key={index}
                    href={item.Route}
                    className={`w-full px-3 py-4 flex items-center justify-start gap-2 group  text-sm font-medium rounded-xl ${
                      item.Route === Router.pathname
                        ? "text-white bg-gradient-to-b from-brand-main to-brand-secondary"
                        : " hover:text-white hover:bg-gradient-to-b from-brand-main to-brand-secondary"
                    }`}
                  >
                    {item.icon}
                    {item.Name}
                  </Link>
                );
              })}
            </div>
            <div className="w-full flex flex-col items-center justify-start gap-2">
              <Link
                href={"#"}
                onClick={toggleDrawer}
                className={`w-full px-3 py-4 flex items-center justify-start gap-2 group  text-sm font-medium rounded-xl ${
                  "#" === Router.pathname
                    ? "text-white bg-gradient-to-b from-brand-main to-brand-secondary"
                    : " hover:text-white hover:bg-gradient-to-b from-brand-main to-brand-secondary"
                }`}
              >
                <IoSettingsOutline className="text-[24px]" />
                Setting
              </Link>
              <Link
                href={"#"}
                onClick={toggleDrawer}
                className={`w-full px-3 py-4 flex items-center justify-start gap-2 group  text-sm font-medium rounded-xl ${
                  "#" === Router.pathname
                    ? "text-white bg-gradient-to-r from-brand-tartary to-brand-secondary"
                    : " hover:text-white hover:bg-gradient-to-r from-brand-tartary to-brand-secondary"
                }`}
              >
                <MdLogout className="text-[24px]" />
                Logout
              </Link>
            </div>
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default DashboardSideBar;
