import React from "react";
import instruction1_pic from "@/img/documentation/update_badges/instruction1_pic.png";
import instruction2_pic from "@/img/documentation/update_badges/instruction2_pic.png";
import instruction3_pic from "@/img/documentation/update_badges/instruction3_pic.png";
import edit_icon from "@/img/edit_icon.svg";

const UpdateBadge: React.FC = () => {
  return (
    <div className="inner-content">
      <h1>Update Badge Name</h1>
      <ol>
        <li>
          <p>
            In your <b>Dashboard</b> tab, click{" "}
            <img className="icon" src={edit_icon} alt="edit_icon" /> icon.
          </p>
          <img className="image" src={instruction1_pic} />
        </li>
        <li>
          <p>Change name, then press "Save" button</p>
          <img className="image" src={instruction2_pic} />
        </li>
        <li>
          <p>Now, dashboard displays the badge with new name</p>
          <img className="image" src={instruction3_pic} />
        </li>
      </ol>
      <p>
        <span className="alert">
          To edit badge image, remove and add new badge.
        </span>
      </p>
      <div className="end-of-content" />
    </div>
  );
};

export default UpdateBadge;
