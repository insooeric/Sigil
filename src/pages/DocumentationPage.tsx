import Custombadge from "@/components/DocumentComponents/CustomBadge";
import Default from "@/components/DocumentComponents/Default";
import GetStarted from "@/components/DocumentComponents/GetStarted";
import Restriction from "@/components/DocumentComponents/Restriction";
import AddBadge from "@/components/DocumentComponents/AddBadge";
import UpdateBadge from "@/components/DocumentComponents/UpdateBadge";
import DeleteBadge from "@/components/DocumentComponents/DeleteBadge";
import GridBadges from "@/components/DocumentComponents/GridBadges";
import React, { useState } from "react";

const DocumentationPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Get Started");

  const options = [
    "Get Started",
    "Restriction",
    "Default",
    "Custom Badges",
    "Add Badge",
    "Update Badge",
    "Delete Badge",
    "Gridding Badges",
  ];

  return (
    <div className="documentation-page">
      <h1>Documentation</h1>
      <div className="grid-view">
        <div className="option-list">
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
        <div className="description-content">
          <div
            className={`content ${activeTab === "Get Started" ? "active" : ""}`}
          >
            <GetStarted />
          </div>
          <div
            className={`content ${activeTab === "Restriction" ? "active" : ""}`}
          >
            <Restriction />
          </div>
          <div className={`content ${activeTab === "Default" ? "active" : ""}`}>
            <Default />
          </div>
          <div
            className={`content ${
              activeTab === "Custom Badges" ? "active" : ""
            }`}
          >
            <Custombadge />
          </div>
          <div
            className={`content ${activeTab === "Add Badge" ? "active" : ""}`}
          >
            <AddBadge />
          </div>
          <div
            className={`content ${
              activeTab === "Update Badge" ? "active" : ""
            }`}
          >
            <UpdateBadge />
          </div>
          <div
            className={`content ${
              activeTab === "Delete Badge" ? "active" : ""
            }`}
          >
            <DeleteBadge />
          </div>
          <div
            className={`content ${
              activeTab === "Gridding Badges" ? "active" : ""
            }`}
          >
            <GridBadges />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentationPage;
