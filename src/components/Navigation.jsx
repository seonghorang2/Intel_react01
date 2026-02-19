import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/counter">Counter</NavLink>
      <NavLink to="/todolist">TodoList</NavLink>
      <a href="https://www.naver.com" target="_blank" rel="noopener noreferrer">
        Naver
      </a>
    </nav>
  );
}

export default Navigation;
