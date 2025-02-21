import React from "react";
import nav_logo_icon from "@/img/nav_logo_icon.svg";
import { useNavigate } from "react-router-dom";

const NavBar: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="navbar">
      <img className="logo" src={nav_logo_icon} alt="logo" />
      <ul>
        <li value="home" onClick={() => navigate("/")}>
          Home
        </li>
        <li value="document" onClick={() => navigate("/document")}>
          Document
        </li>
        <li value="dashboard" onClick={() => navigate("/dashboard")}>
          Dashboard
        </li>
        <li value="badges" onClick={() => navigate("/default-badges")}>
          Badges
        </li>
        <li value="sandbox" onClick={() => navigate("/sandbox")}>
          Sandbox
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
