import React, { ReactNode } from "react";
import Navbar from "../../components/dashboard/navbar/Navbar";
import Intro from "./Intro";

type DashboardProps = {
  children: ReactNode;
};

const Dashboard: React.FC<DashboardProps> = ({ children }) => {
  return (
    <div>
      <Navbar />
      <Intro image={""}/>
      <div>{children}</div>
    </div>
  );
};

export default Dashboard;
