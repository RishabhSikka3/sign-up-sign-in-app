import React from "react";
import { Link } from "react-router-dom";

const LandingPage: React.FC = () => {
  return (
    <div>
      <h1>Welcome to Our Application!</h1>

      <Link to="/">Login</Link>
    </div>
  );
};

export default LandingPage;
