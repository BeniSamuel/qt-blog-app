import React from "react";
import Navbar from "../../components/dashboard/navbar/Navbar";
import Intro from "../../components/dashboard/Intro/Intro";
import Blogs from "../../components/dashboard/blogs/Blogs";

const Home: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Intro />
      <Blogs />
    </div>
  );
};

export default Home;
