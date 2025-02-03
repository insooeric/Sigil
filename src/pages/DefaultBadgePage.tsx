import React, { useEffect, useState } from "react";
import copy_icon from "@/img/copy_icon.svg";
import loading_icon from "@/img/loading_icon.svg";

interface BadgeItem {
  userId: string;
  badgeName: string;
  badgeURL: string;
}

const DefaultBadgePage: React.FC = () => {
  const [badges, setBadges] = useState<BadgeItem[]>([]);
  const [isFetchingBadges, setIsFetchingBadges] = useState(true);
  const [loadingImages, setLoadingImages] = useState<{
    [key: string]: boolean;
  }>({});
  const backendURL = import.meta.env.VITE_BACKEND_URL;

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
    setIsFetchingBadges(true);
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

      const initialLoadingState = data.badges.reduce(
        (acc: { [key: string]: boolean }, badge: BadgeItem) => {
          acc[badge.badgeName] = true;
          return acc;
        },
        {}
      );
      setLoadingImages(initialLoadingState);
    } catch (error) {
      console.error("Error fetching badges:", error);
    }
    setIsFetchingBadges(false);
  };

  const handleImageLoad = (badgeName: string) => {
    setLoadingImages((prev) => ({ ...prev, [badgeName]: false }));
  };

  const handleImageError = (badgeName: string) => {
    setLoadingImages((prev) => ({ ...prev, [badgeName]: false }));
  };

  return (
    <div className="default-badge-page">
      <h1>Default Badges</h1>

      {isFetchingBadges ? (
        <div className="loading-container">
          <img
            src={loading_icon}
            className="loading-animation"
            alt="Loading badges..."
          />
          <p>Loading badges...</p>
        </div>
      ) : (
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
                {loadingImages[badge.badgeName] && (
                  <img
                    src={loading_icon}
                    alt="Loading..."
                    className="loading-animation"
                  />
                )}
                <img
                  src={badge.badgeURL}
                  alt="Badge"
                  onLoad={() => handleImageLoad(badge.badgeName)}
                  onError={() => handleImageError(badge.badgeName)}
                  style={
                    loadingImages[badge.badgeName] ? { display: "none" } : {}
                  }
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DefaultBadgePage;
