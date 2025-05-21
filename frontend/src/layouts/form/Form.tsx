import React, { ReactNode } from "react";
import FormLeft from "./FormLeft";
import FormRight from "./FormRight";

type FormProps = {
  image: string;
  children: ReactNode;
};

const Form: React.FC<FormProps> = ({ image, children }) => {
  return (
    <div className="flex h-screen overflow-hidden">
      <FormLeft image={image} />
      <FormRight>{children}</FormRight>
    </div>
  );
};

export default Form;
