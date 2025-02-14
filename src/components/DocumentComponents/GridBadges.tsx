import React from "react";
import copy_icon from "@/img/copy_icon.svg";

const GridBadges: React.FC = () => {
  const handleCopyClick = (badgeURL: string) => {
    //const imgTagString = `<img alt="${badgeName}" src="${badgeURL}">`;
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
      <h1>Gridding Badges</h1>
      <p>You can display multiple badges using in-line properties.</p>
      <p>Followings are properties you can configure</p>
      <ul>
        <li>
          badge=<span className="dark">Item1, Item2, Item3</span>
        </li>
        <li>
          row=<span className="dark">Integer number</span>
        </li>
        <li>
          col=<span className="dark">Integer number</span>
        </li>
        <li>
          fit=<span className="dark">True or False</span>
        </li>
      </ul>

      <h2>Examples</h2>
      <p>
        <span className="alert">
          NOTE that the size doesn't look exactly the same as in the examples.
        </span>
      </p>
      <ul>
        <li>
          <p>Multiple badges</p>
          <div className="code-block">
            <div className="scroll-container">
              https://githubbadges.onrender.com/api/badge?user=insooeric&badge=cat,readme_i,readme_do,readme_full_stack,readme_development,javascript,cs
            </div>
            <img
              alt="Copy"
              src={copy_icon}
              onClick={() =>
                handleCopyClick(
                  "https://githubbadges.onrender.com/api/badge?user=insooeric&badge=cat,readme_i,readme_do,readme_full_stack,readme_development,javascript,cs"
                )
              }
            />
          </div>
          <img
            className="image"
            alt="Badge Gridding Example"
            src="https://githubbadges.onrender.com/api/badge?user=insooeric&badge=cat,readme_i,readme_do,readme_full_stack,readme_development,javascript,cs"
          />
        </li>
        <li>
          <p>
            Badges with 2 rows <span className="dark">row=2</span>
          </p>
          <div className="code-block">
            <div className="scroll-container">
              https://githubbadges.onrender.com/api/badge?user=insooeric&badge=cat,readme_i,readme_do,readme_full_stack,readme_development,javascript,cs&row=2
            </div>
            <img
              alt="Copy"
              src={copy_icon}
              onClick={() =>
                handleCopyClick(
                  "https://githubbadges.onrender.com/api/badge?user=insooeric&badge=cat,readme_i,readme_do,readme_full_stack,readme_development,javascript,cs&row=2"
                )
              }
            />
          </div>
          <img
            className="image"
            alt="Badge Gridding Example"
            src="https://githubbadges.onrender.com/api/badge?user=insooeric&badge=cat,readme_i,readme_do,readme_full_stack,readme_development,javascript,cs&row=2"
          />
        </li>
        <li>
          <p>
            Badges with 2 columns <span className="dark">col=2</span>
          </p>
          <div className="code-block">
            <div className="scroll-container">
              https://githubbadges.onrender.com/api/badge?user=insooeric&badge=cat,readme_i,readme_do,readme_full_stack,readme_development,javascript,cs&col=2
            </div>
            <img
              alt="Copy"
              src={copy_icon}
              onClick={() =>
                handleCopyClick(
                  "https://githubbadges.onrender.com/api/badge?user=insooeric&badge=cat,readme_i,readme_do,readme_full_stack,readme_development,javascript,cs&col=2"
                )
              }
            />
          </div>
          <img
            className="image"
            alt="Badge Gridding Example"
            src="https://githubbadges.onrender.com/api/badge?user=insooeric&badge=cat,readme_i,readme_do,readme_full_stack,readme_development,javascript,cs&col=2"
          />
        </li>
        <li>
          <p>
            Badges with 2 rows and fit <span className="dark">row=2</span>{" "}
            <span className="dark">fit=true</span>
          </p>
          <div className="code-block">
            <div className="scroll-container">
              https://githubbadges.onrender.com/api/badge?user=insooeric&badge=cat,readme_i,readme_do,readme_full_stack,readme_development,javascript,cs&row=2&fit=true
            </div>
            <img
              alt="Copy"
              src={copy_icon}
              onClick={() =>
                handleCopyClick(
                  "https://githubbadges.onrender.com/api/badge?user=insooeric&badge=cat,readme_i,readme_do,readme_full_stack,readme_development,javascript,cs&row=2&fit=true"
                )
              }
            />
          </div>
          <img
            className="image"
            alt="Badge Gridding Example"
            src="https://githubbadges.onrender.com/api/badge?user=insooeric&badge=cat,readme_i,readme_do,readme_full_stack,readme_development,javascript,cs&row=2&fit=true"
          />
        </li>
      </ul>

      <div className="end-of-content" />
    </div>
  );
};

export default GridBadges;
