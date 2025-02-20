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
      <p>
        <span className="alert">IMPORTANT!</span>
      </p>
      <p>
        In order to use both customized badges and default badges, you must
        include your GitHub user name in <span className="dark">user=</span>
      </p>
      <p>
        For example, <span className="dark">...user=GitHubUserName...</span>
      </p>
      <h2>Multiple badges</h2>
      <p>
        You can display both your badges and default badges by adding the name
        of badge in the <span className="dark">badge=</span> property.
      </p>
      <p>By default, it will display badges with a single row.</p>
      <p>
        For example,{" "}
        <span className="dark">...badge=my_custom_badge, javascript,...</span>
      </p>
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
      <br />
      <h2>Rows</h2>
      <p>
        You can use <span className="dark">row=</span> property to display
        badges in multiple rows.
      </p>
      <p>The column will be adjusted automatically by default.</p>
      <p>The value of row should be a valid integer number.</p>
      <p>
        For example, <span className="dark">...row=2...</span>
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
      <br />
      <h2>Columns</h2>
      <p>
        You can use <span className="dark">col=</span> property to display
        badges in multiple columns.
      </p>
      <p>The row will be adjusted automatically by default.</p>
      <p>The value of column should be a valid integer number.</p>
      <p>
        For example, <span className="dark">...col=2...</span>
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
      <br />
      <h2>Fit content</h2>
      <p>
        In case you want to fit badges in grid, you can use{" "}
        <span className="dark">fit=</span> property.
      </p>
      <p>
        The value of fit should be either <span className="dark">true</span> or{" "}
        <span className="dark">false</span>
      </p>
      <p>
        For example, <span className="dark">...fit=true...</span>
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
      <br />
      <p>
        <span className="alert">
          NOTE that the size doesn't look exactly the same as in the examples.
        </span>
      </p>
      <div className="end-of-content" />
    </div>
  );
};

export default GridBadges;
