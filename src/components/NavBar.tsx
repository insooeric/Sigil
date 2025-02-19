import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { setUser, clearUser } from "@/redux/authSlice";

interface NavBarProps {
  testval: 0;
}

const NavBar: React.FC<NavBarProps> = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.auth.user);
  const navigate = useNavigate();

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

  const handleLogin = () => {
    //const clientId = import.meta.env.VITE_GITHUB_CLIENT_ID;
    // const clientId = import.meta.env.VITE_DEV_GITHUB_CLIENT_ID;
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
    <nav className="navbar">
      <ul>
        <li>
          <div>
            <Link to="/">Home</Link>
          </div>
        </li>
        <li>
          <div>
            <Link to="/document">Document</Link>
          </div>
        </li>
        <li>
          <div>
            <Link to="/dashboard">Dashboard</Link>
          </div>
        </li>

        <li>
          <div>
            <Link to="/sandbox">Sandbox</Link>
          </div>
        </li>
        <li>
          <div>
            <Link to="/default-badges">Badges</Link>
          </div>
        </li>
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
    </nav>
  );
};

export default NavBar;
