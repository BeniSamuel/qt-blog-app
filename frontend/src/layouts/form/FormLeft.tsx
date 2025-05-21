import React from "react";
import bg_cover from "../../assets/form/formLeftBg.png";
import qtblog from "../../assets/form/qtblog.svg";

const FormLeft: React.FC = () => {
  return (
    <div className="hidden md:block md:w-1/2 h-full relative">
      <img
        src={bg_cover}
        alt="Form Background"
        className="w-full h-full object-cover"
      />
      <div>
        <div className="absolute bottom-28 left-12">
          <img src={qtblog} />
        </div>
        <div className="absolute bottom-7 left-12">
          <p className="font-urbanist text-white font-semibold text-xl">
            Interesting ideas worth reading, <br />
            from Rwanda's top authors
          </p>
          <p className="text-[#DDDDDD] font-urbanist font-medium">
            Join the world of 100+ creative writers and more
          </p>
        </div>
      </div>
    </div>
  );
};

export default FormLeft;
