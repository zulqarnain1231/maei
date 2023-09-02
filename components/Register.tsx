import React, { useState } from "react";
import Image from "next/image";
import { Input, PasswordInput } from "@mantine/core";
import { HiOutlineMail } from "react-icons/hi";
import { MdOutlineLock } from "react-icons/md";

const Register = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const handleInputs = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <div className="w-full min-h-screen flex flex-col items-start justify-start gap-16 bg-[url('/Register.png')] bg-cover bg-no-repeat py-5">
      <div className="w-full flex items-center justify-start">
        <div className="sm:h-[90px] h-[75px] sm:w-[320px] w-[280px] flex items-center justify-center bg-white rounded-r-[100px]">
          <div className="sm:h-[60px] h-[50px] sm:w-[130px] w-[110px] relative">
            <Image
              src={"/Logo.png"}
              className="object-cover h-full w-full"
              alt=""
              fill
            />
          </div>
        </div>
      </div>
      <div className="w-full grid md:grid-cols-2 md:gap-0 gap-10 place-items-center">
        <aside className=" xl:w-[40%] lg:w-[50%] w-full flex items-center justify-center">
          <h1 className="text-white text-center text-5xl font-medium font-manrope">
            Create your Account Now
          </h1>
        </aside>
        <aside className="w-full flex items-center justify-center">
          <form
            onSubmit={handleSubmit}
            className="xl:w-[65%] lg:w-[70%] md:w-[85%] w-[95%] flex flex-col items-center justify-start gap-9 bg-white rounded-[35px] py-[33px] sm:px-[48px] px-[30px] shadow-xl"
          >
            <div className="w-full flex flex-col items-center justify-start gap-3">
              <h2 className="font-bold text-transparent text-2xl bg-clip-text bg-gradient-to-r from-brand-main to-brand-secondary">
                Register
              </h2>
              <p className="text-black text-base text-center font-semibold">
                Stable Dollar Wallet
              </p>
            </div>
            <div className="w-full flex flex-col items-start justify-start gap-5">
              <div className="w-full flex flex-col items-start justify-start gap-1">
                <Input.Label className="text-sm font-semibold text-black">
                  Email
                </Input.Label>
                <Input
                  className="w-full"
                  name="email"
                  onChange={handleInputs}
                  value={inputs.email}
                  classNames={{
                    input:
                      "rounded-[5px] border border-[#CED4DA] text-base font-normal !font-manrope",
                  }}
                  required
                  size="lg"
                  type="email"
                  icon={<HiOutlineMail size={20} className="text-black" />}
                  placeholder="Input your email address"
                />
              </div>
              <div className="w-full flex flex-col items-start justify-start gap-2">
                <PasswordInput
                  className="w-full"
                  name="password"
                  onChange={handleInputs}
                  value={inputs.password}
                  classNames={{
                    input:
                      "rounded-[5px] border border-[#CED4DA] text-base font-normal font-manrope placeholder:text-base",
                    innerInput: "text-base",
                    visibilityToggle: "text-black",
                    label: "text-sm font-semibold text-black mb-1",
                  }}
                  icon={<MdOutlineLock size={20} className="text-black" />}
                  placeholder="Input your password"
                  label="Password"
                  required
                  withAsterisk={false}
                  size="lg"
                />
                <div className="w-full flex items-center justify-end">
                  <p className="text-black text-sm font-medium font-manrope">
                    Forgot your password?
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col items-center justify-start gap-5">
              <button
                type="submit"
                className="w-full h-[54px] flex items-center justify-center text-base text-white font-semibold font-sans rounded-[9px] bg-gradient-to-b from-brand-main to-brand-secondary"
              >
                Create an Account
              </button>
              <div className="w-full flex items-center justify-center gap-1">
                <p className="text-sm text-black font-medium">
                  Do you have an account?
                </p>
                <p className="text-sm text-black font-bold cursor-pointer">
                  Login
                </p>
              </div>
            </div>
          </form>
        </aside>
      </div>
    </div>
  );
};

export default Register;
