import React from "react";
import description16_pic from "@/img/description16_pic.png";
import copy_icon from "@/img/copy_icon.svg";

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
        If you are new to here, <b>WELCOME!</b>
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
      <p>Followings are the basic rules:</p>
      <ol>
        <li>
          <p>
            The url <b>ALWAYS</b> starts with{" "}
            <span className="dark">
              https://githubbadges.onrender.com/api/badge?
            </span>
          </p>
        </li>
        <li>
          <p>
            Except for the first attribute, to add any attribute, add{" "}
            <span className="dark">&</span> character infront of it.
          </p>
          <p>For example:</p>
          <div className="code-block">
            <div className="scroll-container">
              https://githubbadges.onrender.com/api/badge?user=insooeric&badge=cat,javascript&row=2
            </div>
            <img
              alt="Copy"
              src={copy_icon}
              onClick={() =>
                handleCopyClick(
                  "https://githubbadges.onrender.com/api/badge?user=insooeric&badge=cat,javascript&row=2"
                )
              }
            />
          </div>
          <img
            className="image"
            style={{ width: "50px" }}
            alt="Badge Basic Example"
            src="https://githubbadges.onrender.com/api/badge?user=insooeric&badge=cat,javascript&row=2"
          />
        </li>

        <li>
          <p>
            If you're only using default badges, you don't need to include{" "}
            <span className="dark">user=</span> attribute.
          </p>
        </li>
        <li>
          <p>
            If you're using customized badges, you <b>MUST</b> include{" "}
            <span className="dark">user=</span> attribute followed by your
            GitHub user name. (see above code)
          </p>
        </li>
        <li>
          <p>
            <span className="dark">user=</span> attribute only accepts a single
            user.
          </p>
        </li>
        <li>
          <p>
            Others may also use your customized badge by using your user name in{" "}
            <span className="dark">user=</span> attribute.
          </p>
        </li>
        <li>
          <p>
            However, others can't manage your badge; <b>ONLY YOU</b> can.
            <br />
            (I'm handling this securely; So, you're fine (＾＾)ｂ)
          </p>
        </li>
      </ol>
      <br />
      <h2>Example</h2>
      <img className="image" alt="Example" src={description16_pic} />
      <div className="end-of-content" />
    </div>
  );
};

export default GetStarted;
