import React, { useState } from "react";

const Checkbox: React.FC = () => {
  const [checked, setChecked] = useState<boolean>(false);
  if (checked) return <div onClick={() => {setChecked(!checked)}} className=" bg-[#D9D9D9] border-2 rounded-md h-6 w-7"></div>;
  return <div className=" border-[#D9D9D9] border-2 rounded-md h-6 w-7" onClick={() => {setChecked(!checked)}}/>;
};

export default Checkbox;
