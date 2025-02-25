import React from "react";
import instruction1_pic from "@/img/documentation/delete_badges/instruction1_pic.png";
import instruction2_pic from "@/img/documentation/delete_badges/instruction2_pic.png";
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
          <img className="image" src={instruction1_pic} />
        </li>
        <li>
          <p>Then, it's gone!</p>
          <img className="image" src={instruction2_pic} />
        </li>
      </ol>

      <div className="end-of-content" />
    </div>
  );
};

export default RemoveBadge;
