import React from "react";
import bg_cover from "../../assets/form/formLeftBg.png";

const FormLeft: React.FC = () => {
  return (
    <div className="w-1/2 h-full">
      <img
        src={bg_cover}
        alt="Form Background"
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default FormLeft;
