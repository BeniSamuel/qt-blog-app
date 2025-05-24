import React from "react";
import Navbar from "../../components/dashboard/navbar/Navbar";
import Intro from "../../components/dashboard/Intro/Intro";

const Home: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Intro />
    </div>
  );
};

export default Home;
