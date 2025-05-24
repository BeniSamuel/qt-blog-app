import React, { useEffect, useState } from "react";
import axios from "axios";
import { Role } from "../../../enums/role.enum";

type User = {
  id: number;
  name: string;
  email: string;
  password: string;
  role: Role;
};

const UserProfile: React.FC = () => {
  const [user, setUser] = useState<User>({
    id: 0,
    name: "",
    email: "",
    password: "",
    role: Role.USER,
  });

  useEffect(() => {
    const getUserProfile = async () => {
      try {
        const token = localStorage.getItem("authToken");

        const response = await axios.get(
          "http://localhost:8080/api/qtblog/user/me",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.data.success) {
          setUser(response.data.data);
        }
      } catch (error) {
        console.error(error);
      }
    };

    getUserProfile();
  }, []);
  return (
    <div className=" flex flex-row gap-4 items-center">
      <div className=" text-black font-urbanist">{user.name}</div>
      <div className=" flex flex-row justify-center items-center text-white font-urbanist font-bold text-xl bg-slate-500 w-12 h-12 rounded-full">{user.name[0]}</div>
    </div>
  );
};

export default UserProfile;
