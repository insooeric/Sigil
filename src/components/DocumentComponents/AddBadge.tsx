import React from "react";
import description3_pic from "@/img/description3_pic.png";
import description4_pic from "@/img/description4_pic.png";
import description5_pic from "@/img/description5_pic.png";
import add_icon from "@/img/add_icon.svg";

const Default: React.FC = () => {
  return (
    <div className="inner-content">
      <h1>Adding Badge</h1>
      <ol>
        <li>
          <p>
            In your <b>Dashboard</b> tab, click{" "}
            <img className="icon" src={add_icon} alt="add_icon" /> icon.
          </p>
          <img className="image" src={description3_pic} />
        </li>
        <li>
          Then follow:
          <ol>
            <li>Name the badge by clicking text area.</li>
            <li>
              Drag & drop or select the file by clicking the placeholder area.
            </li>
            <li>Click "Add" button to add badge.</li>
            <img className="image" src={description4_pic} />
          </ol>
        </li>
        <li>
          <p>
            Once hitting "Add" button, the Dashboard will display the new badge.
          </p>
          <img className="image" src={description5_pic} />
        </li>
      </ol>

      <div className="end-of-content" />
    </div>
  );
};

export default Default;
