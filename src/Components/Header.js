import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./comp.css";
import loggedIn from "./utils/logged";
import { useSelector } from "react-redux";

const Header = () => {
  const { userName } = useContext(loggedIn);
  const itemValue = useSelector((store) => store.cart.items);
  return (
    <div className="header">
      <h1>Swiggito</h1>
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/about">
          <li>About</li>
        </Link>
        <Link to="service">
          <li>services</li>
        </Link>
        <Link to="cart">
          <li>cart-{itemValue.length} items</li>
        </Link>
        <li>{userName}</li>
      </ul>
    </div>
  );
};

export default Header;
