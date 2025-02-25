import React from "react";
import instruction1_pic from "@/img/documentation/add_badges/instruction1_pic.png";
import instruction2_pic from "@/img/documentation/add_badges/instruction2_pic.png";
import instruction3_pic from "@/img/documentation/add_badges/instruction3_pic.png";
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
          <img className="image" src={instruction1_pic} />
        </li>
        <li>
          Then follow:
          <ol>
            <li>Name the badge by clicking text area.</li>
            <li>
              Drag & drop or select the file by clicking the placeholder area.
            </li>
            <li>Click "Add" button to add badge.</li>
            <img className="image" src={instruction2_pic} />
          </ol>
        </li>
        <li>
          <p>
            Once hitting "Add" button, the Dashboard will display the new badge
            you've added.
          </p>
          <img className="image" src={instruction3_pic} />
        </li>
      </ol>

      <div className="end-of-content" />
    </div>
  );
};

export default Default;
