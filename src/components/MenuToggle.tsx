import React from "react";
import { useNavigate } from "react-router-dom";
import "@/MenuToggle.scss";

const MenuToggle: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div id="menuToggle">
      <input type="checkbox" />
      <span></span>
      <span></span>
      <span></span>
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

export default MenuToggle;
