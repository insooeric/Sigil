import React from "react";
import description11_pic from "@/img/description11_pic.png";
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
        copy url.
      </p>
      <img className="image" src={description11_pic} />

      <div className="end-of-content" />
    </div>
  );
};

export default Default;
