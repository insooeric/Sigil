import React from "react";
import logo_icon from "@/img/logo_icon.svg";
import logo_postfix_icon from "@/img/logo_postfix_icon.svg";
import { useNavigate } from "react-router-dom";

const NavBar: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="navbar">
      <div className="logo-container">
        <img className="logo" src={logo_icon} alt="logo" />
        <img className="logo" src={logo_postfix_icon} alt="logo" />
      </div>

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
