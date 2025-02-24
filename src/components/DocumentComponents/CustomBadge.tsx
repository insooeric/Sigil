import React from "react";
import description2_pic from "@/img/description2_pic.png";

const Custombadge: React.FC = () => {
  return (
    <div className="inner-content">
      <h1>Using Custom Badges</h1>
      <p>
        <b>Dashboard</b> tab shows the list of custom badges.
      </p>
      <p>
        <span className="alert">
          NOTE that logging in with GitHub account is required for custom
          badges!
        </span>
      </p>
      <p>You can do following actions:</p>
      <ul>
        <li>Add badge.</li>
        <li>Update badge.</li>
        <li>Delete badge.</li>
      </ul>
      <img className="image" src={description2_pic} />
      <p>
        For further more details, please read <b>Add Badge</b>,{" "}
        <b>Update Badge</b>, <b>Delete Badge</b> in this documentation.
      </p>

      <div className="end-of-content" />
    </div>
  );
};

export default Custombadge;
