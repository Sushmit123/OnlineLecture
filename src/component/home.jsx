import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h2>Welcome to the Online lecture</h2>
      <div>
        <Link to="/Login">
          <button>User Login</button>
        </Link>
      </div>
      <div>
        <Link to="/Admin">
          <button>Admin Login</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
