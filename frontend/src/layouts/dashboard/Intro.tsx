import React from "react";
import back from "../../assets/dashboard/back.svg";
import { Link } from "react-router-dom";

type IntroProps = {
  image: string;
};

const Intro: React.FC<IntroProps> = ({ image }) => {
  return (
    <div className=" bg-[#F6F9FF] h-80 flex flex-row items-start pt-11 pl-44">
      <div className=" flex flex-row items-center gap-2">
        <img src={back} className=" h-4 w-6"/>
        <div className=" font-urbanist font-medium"><Link to={"/home"}>Back to all blogs</Link></div>
      </div>
      <div>
        <img src={image} />
      </div>
    </div>
  );
};

export default Intro;
