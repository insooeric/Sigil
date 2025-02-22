import React from "react";
import { Link } from "react-router-dom";
import "@/MenuToggle.scss";

const MenuToggle: React.FC = () => {
  return (
    <div id="menuToggle">
      <input type="checkbox" />
      <span></span>
      <span></span>
      <span></span>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/document">Document</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/default-badges">Badges</Link>
        </li>
        <li>
          <Link to="/sandbox">Sandbox</Link>
        </li>
      </ul>
    </div>
  );
};

export default MenuToggle;
