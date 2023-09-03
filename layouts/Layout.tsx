import React from "react";
import { useRouter } from "next/router";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import { AppShell, Navbar, Header, MediaQuery } from "@mantine/core";
import Image from "next/image";
import SideBar from "./SideBar";

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
        <AppShell
          className="h-screen"
          navbar={
            <Navbar
              className="bg-black min-h-screen"
              width={{ base: 200 }}
              height={500}
            >
              <div className="w-full h-full flex flex-col items-center justify-between py-[40px] px-[15px]">
                <div className="w-full h-full flex flex-col items-center justify-start gap-6">
                  <div className="relative h-[50px] w-[102px]">
                    <Image
                      src={"/Logo.png"}
                      className="h-full w-full object-cover"
                      alt=""
                      fill
                    />
                  </div>
                </div>
              </div>
            </Navbar>
          }
          //   header={
          //     <Header height={60} p="xs">
          //       <div className="w-full h-full flex items-center justify-center">
          //         <div className="relative h-[50px] w-[100px] z-10">
          //           <Image
          //             src={"/Logo.png"}
          //             className="h-full w-full object-cover"
          //             alt=""
          //             fill
          //           />
          //         </div>
          //         header
          //       </div>
          //     </Header>
          //   }
          //   aside={
          //     <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
          //       <div className="w-full h-[400px] bg-black">sadasd</div>
          //     </MediaQuery>
          //   }
          styles={(theme) => ({
            main: {
              backgroundColor:
                theme.colorScheme === "dark"
                  ? theme.colors.dark[8]
                  : theme.colors.gray[0],
            },
          })}
        >
          <main className={`w-full h-screen ${inter.className}`}>
            {children}
          </main>
        </AppShell>
      )}
    </React.Fragment>
  );
};

export default Layout;
