import React from "react";
import dashboard_pic from "@/img/documentation/custom_badges/dashboard_pic.png";

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

      <img className="image" src={dashboard_pic} />
      <p>In here, you can do following actions:</p>
      <ul>
        <li>Add badge.</li>
        <li>Update badge.</li>
        <li>Delete badge.</li>
      </ul>
      <p>
        For further more details, please read <b>Add Badge</b>,{" "}
        <b>Update Badge</b>, <b>Delete Badge</b> in this documentation.
      </p>

      <div className="end-of-content" />
    </div>
  );
};

export default Custombadge;
