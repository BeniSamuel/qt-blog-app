import React from "react";
import blogLogo from "../../../assets/dashboard/qtblog.svg";
import notification from "../../../assets/dashboard/notification.svg";
import UserProfile from "./UserProfile";

const Navbar: React.FC = () => {
  return (
    <div className=" sticky top-0 left-0 right-0 z-50 bg-white/80  px-6 md:px-12 py-4 flex justify-between items-center">
      <div className="flex flex-row gap-6 md:gap-10 items-center">
        <img src={blogLogo} alt="Blog Logo" className="h-8 w-auto" />
        <div className="text-sm md:text-base font-urbanist font-semibold cursor-pointer">Home</div>
        <div className="text-sm md:text-base font-urbanist font-medium cursor-pointer">Blogs</div>
        <div className="text-sm md:text-base font-urbanist font-medium cursor-pointer">Add blog</div>
      </div>
      <div className="flex flex-row items-center gap-4">
        <img src={notification} alt="Notifications" className="h-6 w-6 cursor-pointer" />
        <UserProfile />
      </div>
    </div>
  );
};

export default Navbar;
