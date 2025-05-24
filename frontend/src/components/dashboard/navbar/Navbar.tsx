import React from "react";
import blogLogo from "../../../assets/dashboard/qtblog.svg";
import notification from "../../../assets/dashboard/notification.svg";
import UserProfile from "./UserProfile";

const Navbar: React.FC = () => {
  return (
    <div className=" flex flex-row justify-between items-center py-5 px-12">
      <div className=" flex flex-row gap-8">
        <img src={blogLogo} />
        <div className=" font-urbanist font-semibold">Home</div>
        <div className=" font-urbanist font-medium">Blogs</div>
        <div className=" font-urbanist font-medium">Add blog</div>
      </div>
      <div className=" flex flex-row items-center gap-4">
        <img src={notification}/>
        <UserProfile />
      </div>
    </div>
  );
};

export default Navbar;
