import React from "react";
import qtBlogCover from "../../../assets/dashboard/qtBlogCover.svg";

const Intro: React.FC = () => {
  return (
    <div className=" bg-[#F6F9FF] h-80 flex flex-row justify-center gap-80 pb-20">
      <div className=" flex flex-row items-center gap-5">
        <img src={qtBlogCover} className=" h-28"/>
        <span className=" font-urbanist text-3xl font-bold text-[#143751]">Qtblog</span>
      </div>
      <div className=" flex flex-col items-center justify-end">
        <button className=" font-urbanist bg-[#143751] py-3 px-6 rounded-[2rem] text-white">Add blog</button>
      </div>
    </div>
  );
};

export default Intro;
