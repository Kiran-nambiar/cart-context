import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div style={{ background: "tomato" }}>
      <nav className="d-flex p-5">
        <Link to="/">
          <h4>Home</h4>
        </Link>
        <Link className="ml-auto mr-0" to="/cart">
          <h4>Cart</h4>
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
