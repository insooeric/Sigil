import React from "react";
import description9_pic from "@/img/description9_pic.png";
import description10_pic from "@/img/description10_pic.png";
import delete_icon from "@/img/delete_icon.svg";

const RemoveBadge: React.FC = () => {
  return (
    <div className="inner-content">
      <h1>Delete Badge</h1>
      <ol>
        <li>
          <p>
            In your <b>Dashboard</b> tab, click{" "}
            <img className="icon" src={delete_icon} alt="delete_icon" /> icon
          </p>
          <img className="image" src={description9_pic} />
        </li>
        <li>
          <p>Then, it's gone!</p>
          <img className="image" src={description10_pic} />
        </li>
      </ol>

      <div className="end-of-content" />
    </div>
  );
};

export default RemoveBadge;
