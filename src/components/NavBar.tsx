import { useEffect, useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { setUser, clearUser } from "@/redux/authSlice";
import nav_logo_icon from "@/img/nav_logo_icon.svg";
import menu_icon from "@/img/menu_icon.svg";

interface NavBarProps {
  testval: 0;
}

const NavBar: React.FC<NavBarProps> = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.auth.user);
  const navigate = useNavigate();
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  let hideTimeout: ReturnType<typeof setTimeout>;

  const handleDropdownMouseEnter = () => {
    clearTimeout(hideTimeout);
    setDropdownVisible(true);
  };

  const handleDropdownMouseLeave = () => {
    hideTimeout = setTimeout(() => {
      setDropdownVisible(false);
    }, 200);
  };

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

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node)
      ) {
        setMobileMenuVisible(false);
      }
    };

    if (mobileMenuVisible) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [mobileMenuVisible]);

  const toggleMobileMenu = () => {
    setMobileMenuVisible((prev) => !prev);
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
    <nav className="navbar">
      <img src={nav_logo_icon} alt="logo" />
      <img
        src={menu_icon}
        className="mobile"
        alt="mobile menu icon"
        onClick={toggleMobileMenu}
      />
      {mobileMenuVisible && (
        <div className="mobile-nav-container" ref={mobileMenuRef}>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/document">Document</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/default-badges">Badges</Link>
            </li>
            <li>
              <Link to="/sandbox">Sandbox</Link>
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
        </div>
      )}

      <div className="nav-container">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/document">Document</Link>
          </li>
          <li
            onMouseEnter={handleDropdownMouseEnter}
            onMouseLeave={handleDropdownMouseLeave}
          >
            <span>Badges</span>
            {dropdownVisible && (
              <div className="dropdown">
                <ul>
                  <li>
                    <Link to="/dashboard">Dashboard</Link>
                  </li>
                  <li>
                    <Link to="/default-badges">Badges</Link>
                  </li>
                  <li>
                    <Link to="/sandbox">Sandbox</Link>
                  </li>
                </ul>
              </div>
            )}
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
      </div>
    </nav>
  );
};

export default NavBar;
