import React from "react";
import Image from "next/image";
import Link from "next/link";
const AccountCreated = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center gap-16 bg-[url('/AccountRegisterdBg.png')] bg-cover bg-bottom bg-no-repeat py-5">
      <div className="h-[150px] w-[125px] relative pointer-events-none">
        <Image
          className="h-full w-full object-cover"
          src={"/User.png"}
          alt=""
          fill
        />
        <div className="absolute bottom-2 -right-3 z-10">
          <Image
            className="h-[44px] w-[44px]  object-contain"
            src={"/Tick.png"}
            alt=""
            height={40}
            width={40}
          />
        </div>
      </div>
      <div className="xl:w-[25%] lg:w-[35%] flex flex-col items-center justify-start gap-4 mx-auto lg:px-0 px-4">
        <h1 className="text-center text-black sm:text-4xl text-3xl font-manrope font-semibold">
          Account Successfully Created
        </h1>
        <Link
          href={"/"}
          className="w-full h-[54px] flex items-center justify-center text-base text-white font-semibold font-sans rounded-[9px] bg-gradient-to-b from-brand-main to-brand-secondary"
        >
          Create an Account
        </Link>
      </div>
    </div>
  );
};

export default AccountCreated;
