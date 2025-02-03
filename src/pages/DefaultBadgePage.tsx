import React, { useEffect, useState } from "react";
import copy_icon from "@/img/copy_icon.svg";

interface BadgeItem {
  userId: string;
  badgeName: string;
  badgeURL: string;
}

const backendURL = "https://localhost:32769";
const DefaultBadgePage: React.FC = () => {
  const [badges, setBadges] = useState<BadgeItem[]>([]);

  useEffect(() => {
    fetchDefaultBadges();
  }, []);

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

  const fetchDefaultBadges = async () => {
    try {
      const response = await fetch(
        `${backendURL}/api/Badge/get-all-default-badge`,
        {
          method: "GET",
        }
      );
      if (!response.ok) {
        throw new Error(`Failed to fetch badges: ${response.status}`);
      }
      const data = await response.json();
      setBadges(data.badges || []);
    } catch (error) {
      console.error("Error fetching badges:", error);
    }
  };
  return (
    <div className="default-badge-page">
      <h1>Default Badges</h1>
      <div className="badge-container">
        {badges.map((badge) => (
          <div className="badge-item" key={badge.badgeName}>
            <div className="badge-name">{badge.badgeName}</div>
            <div className="badge-copy-url">
              <img
                src={copy_icon}
                onClick={() => handleCopyClick(badge.badgeURL)}
                alt="Copy Badge URL"
              />
            </div>
            <div className="badge-preview">
              <img src={badge.badgeURL} alt="Badge" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default DefaultBadgePage;
