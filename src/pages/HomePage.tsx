import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { setUser, clearUser } from "@/redux/authSlice";

const HomePage: React.FC = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.auth.user);

  useEffect(() => {
    fetch("https://localhost:32769/api/auth/user", {
      credentials: "include",
    })
      .then(async (res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch user");
        }
        return await res.json();
      })
      .then((data) => {
        dispatch(setUser(data));
      })
      .catch(() => {
        console.log("No user or error occurred");
      });
  }, [dispatch]);

  const handleLogin = () => {
    const clientId = import.meta.env.VITE_GITHUB_CLIENT_ID;
    const state = generateRandomString();

    const githubAuthUrl = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${encodeURIComponent(
      "https://localhost:32769/api/auth/github/callback"
    )}&scope=${encodeURIComponent("read:user user:email")}&state=${state}`;

    window.location.href = githubAuthUrl;
  };

  const handleLogout = () => {
    fetch("https://localhost:32769/api/auth/logout", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({}),
    })
      .then(async (res) => {
        if (!res.ok) {
          throw new Error("Logout failed");
        }
        dispatch(clearUser());
      })
      .catch((err) => {
        console.error("Logout failed:", err);
      });
  };

  const generateRandomString = () => {
    return Math.random().toString(36).substring(2, 15);
  };

  return (
    <div className="home-page">
      <h1>Home Page</h1>
      {!user ? (
        <div>
          <button onClick={handleLogin}>Login with GitHub</button>
        </div>
      ) : (
        <div>
          <h2>Welcome, {user.username}!</h2>
          {user.avatarUrl && (
            <img src={user.avatarUrl} alt="avatar" width={50} />
          )}
          <br />
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}
    </div>
  );
};

export default HomePage;
