import React from "react";
import description6_pic from "@/img/description6_pic.png";
import description7_pic from "@/img/description7_pic.png";
import description8_pic from "@/img/description8_pic.png";
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
          <img className="image" src={description6_pic} />
        </li>
        <li>
          <p>Change name, then press "Save" button</p>
          <img className="image" src={description7_pic} />
        </li>
        <li>
          <p>Now, dashboard displays the badge with new name</p>
          <img className="image" src={description8_pic} />
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
