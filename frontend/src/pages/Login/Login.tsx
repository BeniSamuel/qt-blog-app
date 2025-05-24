import React, { FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Form from "../../layouts/form/Form";
import Checkbox from "../../components/form/checkbox/Checkbox";
import bg_cover from "../../assets/form/formLeftBg.png";
import axios from "axios";

type LoginUserInform = {
  email: string;
  password: string;
};

const Login: React.FC = () => {
  const [userInform, setUserInform] = useState<LoginUserInform>({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!userInform.email || !userInform.password) {
      alert("Please fill in both email and password.");
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post("http://localhost:8080/api/qtblog/auth/login-user", userInform);
      if (response.data.success) {
        localStorage.setItem("authToken",response.data.data);
        navigate("/home");
      } else {
        alert("Login failed. Check your credentials.");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Something went wrong during login.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form image={bg_cover}>
      <div className="flex flex-col justify-center gap-4">
        <div className="leading-7">
          <div className="font-urbanist font-bold text-2xl">Welcome back!</div>
          <div className="text-[#696778] font-urbanist">
            Enter your credentials to proceed
          </div>
        </div>
        <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-2">
            <label className="text-[#696778] font-urbanist">Email address</label>
            <input
              type="email"
              placeholder="example@qtblog.rw"
              value={userInform.email}
              onChange={(e) =>
                setUserInform({ ...userInform, email: e.target.value })
              }
              className="placeholder:font-urbanist placeholder:text-[#DDDDDD] border-2 border-[#DDDDDD] py-3 px-4 rounded-md font-urbanist"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-[#696778] font-urbanist">Password</label>
            <input
              type="password"
              placeholder="enter password"
              value={userInform.password}
              onChange={(e) =>
                setUserInform({ ...userInform, password: e.target.value })
              }
              className="placeholder:font-urbanist placeholder:text-[#DDDDDD] border-2 border-[#DDDDDD] py-3 px-4 rounded-md font-urbanist"
            />
          </div>
          <div className="flex flex-row justify-between">
            <div className="flex flex-row gap-2 items-center">
              <Checkbox />
              <span className="font-urbanist text-[#696778]">Remember me</span>
            </div>
            <div className="text-[#696778] font-urbanist underline">
              Forgot password?
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="bg-[#143751] text-white font-urbanist py-3 rounded-md my-8 flex justify-center items-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? (
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            ) : (
              "Sign in"
            )}
          </button>

          <div className="font-urbanist text-[#696778] flex flex-row justify-center gap-1">
            Don't have an account?{" "}
            <span className="text-[#696778] font-semibold"><Link to={"/signup"}>Create one</Link></span>
          </div>
        </form>
      </div>
    </Form>
  );
};

export default Login;
