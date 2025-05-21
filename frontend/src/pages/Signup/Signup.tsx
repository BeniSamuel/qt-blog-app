import React from "react";
import Form from "../../layouts/form/Form";
import bg_cover from "../../assets/form/signupBg.png"

const Signup: React.FC = () => {
  return (
    <Form image={bg_cover}>
      <div className=" flex flex-col justify-center gap-4">
        <div className=" leading-7">
          <div className=" font-urbanist font-bold text-2xl">Create account</div>
          <div className=" text-[#696778] font-urbanist">
            Join the world of top creative writers
          </div>
        </div>
        <form className=" flex flex-col gap-3">
          <div className=" flex flex-col gap-2">
            <label className=" text-[#696778] font-urbanist">
              Username
            </label>
            <input
              type="text"
              placeholder="choose a username"
              className=" placeholder:font-urbanist placeholder:text-[#DDDDDD] border-2 border-[#DDDDDD] py-3 px-4 rounded-md font-urbanist"
            />
          </div>
          <div className=" flex flex-col gap-2">
            <label className=" text-[#696778] font-urbanist">
              Email address
            </label>
            <input
              type="email"
              placeholder="example@qtblog.rw"
              className=" placeholder:font-urbanist placeholder:text-[#DDDDDD] border-2 border-[#DDDDDD] py-3 px-4 rounded-md font-urbanist"
            />
          </div>
          <div className=" flex flex-col gap-2">
            <label className=" text-[#696778] font-urbanist">Password</label>
            <input
              type="password"
              placeholder="enter password"
              className=" placeholder:font-urbanist placeholder:text-[#DDDDDD] border-2 border-[#DDDDDD] py-3 px-4 rounded-md font-urbanist"
            />
          </div>

          <button className=" bg-[#143751] text-white font-urbanist py-3 rounded-md my-8">
            Create account
          </button>
          <div className=" font-urbanist text-[#696778] flex flex-row justify-center gap-1">
            Already have an account?{" "}
            <span className=" text-[#696778] font-semibold">Login</span>
          </div>
        </form>
      </div>
    </Form>
  );
};

export default Signup;
