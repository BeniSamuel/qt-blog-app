import React, { ReactNode } from "react";
import FormLeft from "./FormLeft";
import FormRight from "./FormRight";

type FormProps = {
  children: ReactNode;
};

const Form: React.FC<FormProps> = ({ children }) => {
  return (
    <div className="flex h-screen overflow-hidden">
      <FormLeft />
      <FormRight>{children}</FormRight>
    </div>
  );
};

export default Form;
