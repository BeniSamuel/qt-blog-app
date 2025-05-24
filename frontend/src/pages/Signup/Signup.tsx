import React, { FormEvent, useState } from "react";
import Form from "../../layouts/form/Form";
import bg_cover from "../../assets/form/signupBg.png";
import { Link, useNavigate } from "react-router-dom";
import { Role } from "../../enums/role.enum";
import axios from "axios";

type RegisterUserInform = {
  name: string;
  email: string;
  password: string;
  role: Role;
};

const Signup: React.FC = () => {
  const [userInform, setUserInform] = useState<RegisterUserInform>({
    name: "",
    email: "",
    password: "",
    role: Role.USER,
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    setLoading(true);
    try {
      const response = await axios.post(
        "http://localhost:8080/api/qtblog/auth/register-user",
        userInform
      );
      if (response.data.success) {
        navigate("/");
      }
    } catch (error) {
      console.error("Signup error", error);
    }
  };

  return (
    <Form image={bg_cover}>
      <div className=" flex flex-col justify-center gap-4">
        <div className=" leading-7">
          <div className=" font-urbanist font-bold text-2xl">
            Create account
          </div>
          <div className=" text-[#696778] font-urbanist">
            Join the world of top creative writers
          </div>
        </div>
        <form className=" flex flex-col gap-3" onSubmit={handleSubmit}>
          <div className=" flex flex-col gap-2">
            <label className=" text-[#696778] font-urbanist">Username</label>
            <input
              type="text"
              placeholder="choose a username"
              onChange={(e) => {
                setUserInform({ ...userInform, name: e.target.value });
              }}
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
              onChange={(e) => {
                setUserInform({ ...userInform, email: e.target.value });
              }}
              className=" placeholder:font-urbanist placeholder:text-[#DDDDDD] border-2 border-[#DDDDDD] py-3 px-4 rounded-md font-urbanist"
            />
          </div>
          <div className=" flex flex-col gap-2">
            <label className=" text-[#696778] font-urbanist">Password</label>
            <input
              type="password"
              placeholder="enter password"
              onChange={(e) => {
                setUserInform({ ...userInform, password: e.target.value });
              }}
              className=" placeholder:font-urbanist placeholder:text-[#DDDDDD] border-2 border-[#DDDDDD] py-3 px-4 rounded-md font-urbanist"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className=" bg-[#143751] text-white font-urbanist py-3 rounded-md my-8 flex flex-row justify-center items-center"
          >
            {loading ? (
              <div className=" w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
            ) : (
              "Create account"
            )}
          </button>
          <div className=" font-urbanist text-[#696778] flex flex-row justify-center gap-1">
            Already have an account?{" "}
            <span className=" text-[#696778] font-semibold">
              <Link to={"/"}>Login</Link>
            </span>
          </div>
        </form>
      </div>
    </Form>
  );
};

export default Signup;
