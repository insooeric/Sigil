// import React, { useEffect, useState, FormEvent, useRef } from "react";
// import { useSelector } from "react-redux";
// import { RootState } from "@/redux/store";
// import edit_icon from "@/img/edit_icon.svg";
// import delete_icon from "@/img/delete_icon.svg";
// import add_icon from "@/img/add_icon.svg";
// import copy_icon from "@/img/copy_icon.svg";
// import img_placeholder_icon from "@/img/img_placeholder_icon.svg";
// import loading_icon from "@/img/loading_icon.svg";
import BadgeComponent from "@/components/BadgeComponent";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import ImageComponent from "@/components/ImageComponent";

const DashboardPage: React.FC = () => {
  const user = useSelector((state: RootState) => state.auth.user);

  return (
    <div className="dashboard-page">
      {user ? (
        <div className="profile-container">
          {user.avatarUrl && <img src={user.avatarUrl} alt="avatar" />}
          <h2>Welcome, {user.username}!</h2>
        </div>
      ) : (
        <div>Something went wrong :(</div>
      )}

      <h1>Dashboard</h1>

      {user ? (
        <>
          <BadgeComponent />
          <br />
          <ImageComponent />
        </>
      ) : (
        <div>Unable to load dashboard :(</div>
      )}
    </div>
  );
};

export default DashboardPage;
