import React from "react";
import description16_pic from "@/img/description16_pic.png";

const GetStarted: React.FC = () => {
  return (
    <div className="inner-content">
      <h1>Get Started</h1>
      <p>
        If you are new to here, <b>WELCOME!</b>
      </p>
      <p>
        This application allows <b>GitHub users</b> to display cool{" "}
        <b>badges</b> and <b>custom badges</b> in their <b>Readme.md</b> file.
      </p>
      <p>
        However, you can still use it for other purpose, like displaying small
        image in website for example.
      </p>
      <p>
        Since it is built specifically for GitHub Readme.md,{" "}
        <b>this documentation will only cover usage in Readme.md</b>.
      </p>
      <br />
      <h2>Example</h2>
      <img className="image" alt="Example" src={description16_pic} />
      <div className="end-of-content" />
    </div>
  );
};

export default GetStarted;
