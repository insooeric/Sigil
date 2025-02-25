import React from "react";
import default_badges_pic from "@/img/documentation/default_badges/default_badges_pic.png";
import copy_icon from "@/img/copy_icon.svg";

const Default: React.FC = () => {
  return (
    <div className="inner-content">
      <h1>Default Badges</h1>
      <p>
        <b>Badges</b> tab contains default badges you can use with/without
        login.
      </p>
      <p>
        Click <img className="icon" src={copy_icon} alt="copy_icon" /> icon to
        copy url of default badges.
      </p>
      <img className="image" src={default_badges_pic} />

      <div className="end-of-content" />
    </div>
  );
};

export default Default;
