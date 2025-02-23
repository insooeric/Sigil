import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "@/MenuToggle.scss";

const MenuToggle: React.FC = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleInputChange = () => {
    setIsOpen((prev) => !prev);
  };

  const handleNavClick = (path: string) => {
    navigate(path);
    setIsOpen(false);
  };

  return (
    <div id="menuToggle" ref={menuRef}>
      <input type="checkbox" checked={isOpen} onChange={handleInputChange} />
      <span></span>
      <span></span>
      <span></span>
      <ul>
        <li onClick={() => handleNavClick("/")}>Home</li>
        <li onClick={() => handleNavClick("/document")}>Document</li>
        <li onClick={() => handleNavClick("/dashboard")}>Dashboard</li>
        <li onClick={() => handleNavClick("/default-badges")}>Badges</li>
        <li onClick={() => handleNavClick("/sandbox")}>Sandbox</li>
      </ul>
    </div>
  );
};

export default MenuToggle;
