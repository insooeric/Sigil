import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { setUser, clearUser } from "@/redux/authSlice";
import unverified_person_pic from "@/img/unverified_person_pic.png";
import verified_person_pic from "@/img/verified_person_pic.png";
import sd_logo_pic from "@/img/sd_logo_pic.png";
import MenuToggle from "./MenuToggle";

const TopBar: React.FC = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.auth.user);
  const navigate = useNavigate();
  const [sdMenuVisible, setSdMenuvisible] = useState(false);
  let hideTimeout: ReturnType<typeof setTimeout>;

  useEffect(() => {
    fetch(`/api/auth/user`, {
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

  const handleDropdownMouseEnter = () => {
    clearTimeout(hideTimeout);
    setSdMenuvisible(true);
  };

  const handleDropdownMouseLeave = () => {
    hideTimeout = setTimeout(() => {
      setSdMenuvisible(false);
    }, 200);
  };

  const handleLogin = () => {
    try {
      let clientId = "";
      if (window.location.origin.includes("localhost")) {
        console.log("YOU'RE IN DEV MODE");
        if (!import.meta.env.VITE_DEV_GITHUB_CLIENT_ID) {
          throw new Error("Dev dependency missing :(");
        }
        clientId = import.meta.env.VITE_DEV_GITHUB_CLIENT_ID;
      } else {
        clientId = import.meta.env.VITE_GITHUB_CLIENT_ID;
      }
      const redirectUri = `${window.location.origin}/api/auth/github/callback`;
      console.log(redirectUri);

      const state = generateRandomString();

      const githubAuthUrl = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${encodeURIComponent(
        redirectUri
      )}&scope=${encodeURIComponent("read:user user:email")}&state=${state}`;

      window.location.href = githubAuthUrl;
    } catch (err) {
      console.log(`Error: ${err}`);
      navigate("/");
    }
  };

  const handleLogout = () => {
    fetch(`/api/auth/logout`, {
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
    <div className="topbar">
      <div className="sd-nav">
        <div className="nav-item">
          <MenuToggle />
        </div>
        <div className="nav-item">
          <img src={sd_logo_pic} alt="logo" />
        </div>
      </div>
      <div className="stuffs"></div>
      <div
        className="profile-wrapper"
        onMouseEnter={handleDropdownMouseEnter}
        onMouseLeave={handleDropdownMouseLeave}
      >
        {!user ? (
          <div className="profile">
            <img src={unverified_person_pic} alt="Profile" />
          </div>
        ) : (
          <div className="profile valid">
            {user.avatarUrl ? (
              <img src={user.avatarUrl} alt="Profile" />
            ) : (
              <img src={verified_person_pic} alt="Profile" />
            )}
          </div>
        )}
        {sdMenuVisible && (
          <div className="sd-menu">
            <ul>
              <li>
                {!user ? (
                  <div className="login" onClick={handleLogin}>
                    Login
                  </div>
                ) : (
                  <div className="logout" onClick={handleLogout}>
                    Logout
                  </div>
                )}
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default TopBar;
