import React, { useContext, useRef, useState, useEffect } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import MailIcon from "@mui/icons-material/Mail";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../../Contexts/AuthContexts";
import "./Profile.css";

function useClickOutside(ref, handler) {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        handler();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, handler]);
}
function Profile() {
  const { userInfo } = useContext(AuthContext);
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useClickOutside(dropdownRef, () => {
    setDropdownOpen(false);
  });

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const navigateToLogin = () => {
    localStorage.removeItem("token");
    console.log(userInfo);
    navigate("/");
  };

  return (
    <div className="profile-container">
      <label htmlFor="profile2" className="profile-dropdown">
        <input
          type="checkbox"
          id="profile2"
          checked={dropdownOpen}
          onChange={toggleDropdown}
        />
        <img
          src="https://cdn0.iconfinder.com/data/icons/avatars-3/512/avatar_hipster_guy-512.png"
          alt=""
        />
        <span>Hachib</span>
        <label htmlFor="profile2">
          <ArrowDropDownIcon />
        </label>
        <ul
          ref={dropdownRef}
          className={`dropdown-menu ${dropdownOpen ? "open" : ""}`}
        >
          <li>
            <Link to="/notification">
              Notification
              <MailIcon className="userIcon" />
            </Link>
          </li>
          <li>
            <Link to="Account">
              Account
              <AccountCircleIcon className="userIcon" />
            </Link>
          </li>
          <li>
            <Link to="/setting">
              Settings
              <SettingsIcon className="userIcon" />
            </Link>
          </li>
          <li>
            <Link to="/login" onClick={navigateToLogin}>
              Logout
              <LogoutIcon className="userIcon" />
            </Link>
          </li>
        </ul>
      </label>
    </div>
  );
}

export default Profile;
