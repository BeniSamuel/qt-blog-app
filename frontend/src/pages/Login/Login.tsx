import React from "react";
import Form from "../../layouts/form/Form";
import Checkbox from "../../components/form/checkbox/Checkbox";

const Login: React.FC = () => {
  return (
    <Form>
      <div>
        <div className=" leading-7">
          <div className=" font-urbanist font-bold text-2xl">Welcome back!</div>
          <div className=" text-[#696778] font-urbanist">
            Enter your credentials to proceed
          </div>
        </div>
        <form>
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
          <div>
            <div className=" flex flex-row gap-2 items-center">
              <Checkbox />
              <span className=" font-urbanist text-[#696778]">Remember me</span>
            </div>
          </div>
        </form>
      </div>
    </Form>
  );
};

export default Login;
