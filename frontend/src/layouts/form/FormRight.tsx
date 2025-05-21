import React, { ReactNode } from "react";

type FormRightProps = {
  children: ReactNode;
};

const FormRight: React.FC<FormRightProps> = ({ children }) => {
  return (
    <div className="w-full md:w-1/2 h-full overflow-auto p-10 flex items-center justify-center bg-white">
      <div className="w-full max-w-md">{children}</div>
    </div>
  );
};

export default FormRight;
