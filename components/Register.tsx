import React from "react";
import Image from "next/image";

const Register = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-start justify-start gap-16 bg-[url('/Register.png')] bg-cover bg-no-repeat py-10">
      <div className="w-full flex items-center justify-start">
        <div className="h-[90px] w-[320px] flex items-center justify-center bg-white rounded-r-[100px]">
          <div className="h-[60px] w-[130px] relative">
            <Image
              src={"/Logo.png"}
              className="object-cover h-full w-full"
              alt=""
              fill
            />
          </div>
        </div>
      </div>
      <div className="w-full grid grid-cols-[1.5fr,1fr] place-items-center">
        <aside className=" w-[40%] flex items-center justify-center">
          <h1 className="text-white text-center text-5xl font-medium font-manrope">
            Create your Account Now
          </h1>
        </aside>
        <aside className="w-full flex items-center justify-center">
          <form className="w-[70%] flex flex-col items-center justify-start gap-9 bg-white rounded-[35px] h-[300px] py-[33px] px-[48px]">
            <div className="w-full flex flex-col items-center justify-start gap-3">
              <h2 className="font-bold text-transparent text-2xl bg-clip-text bg-gradient-to-r from-brand-main to-brand-secondary">
                Register
              </h2>
              <p className="text-black text-base text-center font-semibold">
                Stable Dollar Wallet
              </p>
            </div>
          </form>
        </aside>
      </div>
    </div>
  );
};

export default Register;
