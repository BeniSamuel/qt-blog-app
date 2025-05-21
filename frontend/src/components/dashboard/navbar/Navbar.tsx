import React from "react";
import blogLogo from "../../../assets/dashboard/qtblog.svg";
import notification from "../../../assets/dashboard/notification.svg";

const Navbar: React.FC = () => {
  return (
    <div className=" flex flex-row justify-between items-center py-5 px-12">
      <div className=" flex flex-row gap-8">
        <img src={blogLogo} />
        <div className=" font-urbanist font-semibold">Home</div>
        <div className=" font-urbanist font-medium">Blogs</div>
        <div className=" font-urbanist font-medium">Add blog</div>
      </div>
      <div>
        <img src={notification}/>
      </div>
    </div>
  );
};

export default Navbar;
