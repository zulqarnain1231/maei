import React from "react";
import { useRouter } from "next/router";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import { AppShell, Navbar, Header, MediaQuery } from "@mantine/core";
import Image from "next/image";
import SideBar from "./DashboardSideBar";
import DashboardSideBar from "./DashboardSideBar";

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
          <main className="w-full h-[calc(100vh-80px)] md:h-screen overflow-auto">
            {children}
          </main>
        </div>
      )}
    </React.Fragment>
  );
};

export default Layout;
