import React from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <>
      Create your optimized Curriculum Create from Form or Upload Custom
      config.json
      <h2>Home</h2>
      <Link to="/user-form">Go to Form</Link>
    </>
  );
};

export default Home;
