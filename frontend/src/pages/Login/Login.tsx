import React from "react";
import Form from "../../layouts/form/Form";
import Checkbox from "../../components/form/checkbox/Checkbox";

const Login: React.FC = () => {
  return (
    <Form>
      <div className=" flex flex-col justify-center gap-4">
        <div className=" leading-7">
          <div className=" font-urbanist font-bold text-2xl">Welcome back!</div>
          <div className=" text-[#696778] font-urbanist">
            Enter your credentials to proceed
          </div>
        </div>
        <form className=" flex flex-col gap-3">
          <div className=" flex flex-col gap-2">
            <label className=" text-[#696778] font-urbanist">
              Email address
            </label>
            <input
              type="email"
              placeholder="example@qtblog.rw"
              className=" placeholder:font-urbanist placeholder:text-[#DDDDDD] border-2 border-[#DDDDDD] py-3 px-4 rounded-md"
            />
          </div>
          <div className=" flex flex-col gap-2">
            <label className=" text-[#696778] font-urbanist">Password</label>
            <input
              type="password"
              placeholder="ooooo"
              className=" placeholder:font-urbanist placeholder:text-[#DDDDDD] border-2 border-[#DDDDDD] py-3 px-4 rounded-md"
            />
          </div>
          <div className=" flex flex-row justify-between">
            <div className=" flex flex-row gap-2 items-center">
              <Checkbox />
              <span className=" font-urbanist text-[#696778]">Remember me</span>
            </div>
            <div className=" text-[#696778] font-urbanist underline">
              Forgot password?
            </div>
          </div>

          <button className=" bg-[#143751] text-white font-urbanist py-3 rounded-md my-8">
            Sign in
          </button>
          <div className=" font-urbanist text-[#696778] flex flex-row justify-center gap-1">
            Don't have an account?{" "}
            <span className=" text-[#696778] font-semibold">Create one</span>
          </div>
        </form>
      </div>
    </Form>
  );
};

export default Login;
