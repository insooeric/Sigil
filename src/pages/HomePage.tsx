import { useState } from "react";
import home_banner from "@/img/home_banner.jpeg";
import description1_pic from "@/img/description1_pic.png";
import description2_pic from "@/img/description2_pic.png";
import description3_pic from "@/img/description3_pic.png";
import description4_pic from "@/img/description4_pic.png";
import description5_pic from "@/img/description5_pic.png";
import description6_pic from "@/img/description6_pic.png";
import description7_pic from "@/img/description7_pic.png";
import description8_pic from "@/img/description8_pic.png";
import description9_pic from "@/img/description9_pic.png";
import description10_pic from "@/img/description10_pic.png";
import description11_pic from "@/img/description11_pic.png";
import description12_pic from "@/img/description12_pic.png";
import description13_pic from "@/img/description13_pic.png";
import description14_pic from "@/img/description14_pic.png";
import add_icon from "@/img/add_icon.svg";
import edit_icon from "@/img/edit_icon.svg";
import delete_icon from "@/img/delete_icon.svg";
import copy_icon from "@/img/copy_icon.svg";
const HomePage: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Intro");

  const imgTagString = `<img src="..." />`;

  const options = [
    "Intro",
    "Default",
    "Entry",
    "Add",
    "Usage",
    "Edit",
    "Delete",
  ];

  return (
    <div className="home-page">
      <div className="banner">
        <img src={home_banner} alt="Home Banner" />
        <div className="title">Badge Hub</div>
      </div>
      <div className="slogan">Make custom badge and use it!</div>

      <div className="documentation-container">
        <div className="navigation">
          {options.map((option) => (
            <div
              key={option}
              className={`option ${activeTab === option ? "active" : ""}`}
              onClick={() => setActiveTab(option)}
            >
              {option}
            </div>
          ))}
        </div>
        <div className="content-container">
          <div className={`content ${activeTab === "Intro" ? "active" : ""}`}>
            <h1>Introduction</h1>
            This website allows GitHub users to use both built-in and custom
            badges withing their ReadMe.md.
            <br />
            <br />
            <h1>Restriction</h1>
            It can be used in other personal project to display badges; However,
            since it's built specifically for displaying badges, following
            restrictions are applied:
            <ol>
              <li>The output is always formatted in .svg</li>
              <li>The size of .svg is always 30 x 30 pixels</li>
              <li>
                For any image you store, it will automatically resize to width
                of 30 pixels
              </li>
            </ol>
          </div>
          <div className={`content ${activeTab === "Default" ? "active" : ""}`}>
            <h1>Default Badges</h1>
            <ul>
              <li>
                "Badges" tab contains default badges you can use with/without
                login
              </li>
              <li>
                Click <img className="icon" src={copy_icon} alt="copy_icon" />{" "}
                icon to copy url
                <br />
                <img src={description11_pic} />
              </li>
            </ul>
          </div>
          <div className={`content ${activeTab === "Entry" ? "active" : ""}`}>
            <h1>Getting Started</h1>
            <ol>
              <li>Login with Github</li>
              <img src={description1_pic} />
              <li>Navigate to "Dashboard" tab</li>
              <img src={description2_pic} />
            </ol>
          </div>
          <div className={`content ${activeTab === "Add" ? "active" : ""}`}>
            <h1>Adding Badge</h1>
            <ol>
              <li>
                Click <img className="icon" src={add_icon} alt="add_icon" />{" "}
                icon
                <br />
                <img src={description3_pic} />
              </li>
              <li>
                Follow:
                <ol>
                  <li>Name the badge by clicking text area</li>
                  <li>
                    Drag & drop or select the file by clicking the placeholder
                    area
                  </li>
                  <li>Click "Add" button to add badge</li>
                </ol>
                <img src={description4_pic} />
              </li>
              <li>
                Once hitting "Add" button, the Dashboard will display the new
                badge
                <br />
                <img src={description5_pic} />
              </li>
            </ol>
          </div>

          <div className={`content ${activeTab === "Usage" ? "active" : ""}`}>
            <h1>Using badge</h1>
            <ol>
              <li>
                Click <img className="icon" src={copy_icon} alt="copy_icon" />{" "}
                icon to copy url <br />
                Note that adding default badge is exactly the same.
                <br />
                <img src={description12_pic} />
              </li>
              <li>
                Paste url using {imgTagString} tag
                <br />
                <img src={description13_pic} />
              </li>
              <li>
                That's it! <br />
                You can now see the badge in Readme.md.
                <br />
                <img src={description14_pic} />
              </li>
            </ol>
          </div>
          <div className={`content ${activeTab === "Edit" ? "active" : ""}`}>
            <h1>Edit Badge Name</h1>
            <ol>
              <li>
                Click <img className="icon" src={edit_icon} alt="edit_icon" />{" "}
                icon
                <br />
                <img src={description6_pic} />
              </li>
              <li>
                Change name, then press "Save" button
                <br />
                <img src={description7_pic} />
              </li>
              <li>
                Now, dashboard displays the badge with new name
                <br />
                <img src={description8_pic} />
              </li>
            </ol>
          </div>
          <div className={`content ${activeTab === "Delete" ? "active" : ""}`}>
            <h1>Delete Badge</h1>
            <ol>
              <li>
                Click{" "}
                <img className="icon" src={delete_icon} alt="delete_icon" />{" "}
                icon
                <br />
                <img src={description9_pic} />
              </li>
              <li>
                Then, it's gone!
                <br />
                <img src={description10_pic} />
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
