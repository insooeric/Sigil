import React from "react";
import example_pic from "@/img/documentation/get_started/example_pic.png";
import copy_icon from "@/img/copy_icon.svg";
import logo_full_sd_icon from "@/img/documentation/get_started/logo_full_sd_icon.svg";

const GetStarted: React.FC = () => {
  const handleCopyClick = (badgeURL: string) => {
    navigator.clipboard
      .writeText(badgeURL)
      .then(() => {
        console.log("Text copied to clipboard:", badgeURL);
      })
      .catch((err) => {
        console.error("Failed to copy:", err);
      });
  };

  return (
    <div className="inner-content">
      <h1>Introduction</h1>
      <p>
        <b>WELCOME</b> to <img className="app-name" src={logo_full_sd_icon} />!
      </p>
      <p>
        This application allows <b>GitHub users</b> to display cool{" "}
        <b>badges</b> and <b>custom badges</b> in their <b>Readme.md</b> file.
      </p>
      <p>
        While you can still use it for other purpose, like displaying small
        image in website for example, since it is built specifically for GitHub
        Readme.md, <b>this documentation will only cover usage in Readme.md</b>.
      </p>
      <h1>Get Started</h1>
      <p>
        You don't really need to login with GitHub account unless you're using
        default badges.
      </p>
      <p>
        However, if you prefer to create your own badge and use it, login is
        required.
      </p>
      <p>Following pictures are some of the examples:</p>
      <div className="code-block">
        <div className="scroll-container">
          https://stemma.onrender.com/api/badge?user=insooeric&badge=cat,javascript&row=2
        </div>
        <img
          alt="Copy"
          src={copy_icon}
          onClick={() =>
            handleCopyClick(
              "https://stemma.onrender.com/api/badge?user=insooeric&badge=cat,javascript&row=2"
            )
          }
        />
      </div>
      <img
        className="image"
        style={{ width: "50px" }}
        alt="Badge Basic Example"
        src="https://stemma.onrender.com/api/badge?user=insooeric&badge=cat,javascript&row=2"
      />
      <p>Then, you can do something like:</p>
      <img className="image" alt="Example" src={example_pic} />
      <div className="end-of-content" />
    </div>
  );
};

export default GetStarted;
