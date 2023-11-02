import React from "react";
import "./header.css";
// import BellIcon from "../Image/bell.png";
// import SettingIcon from "../Image/setting.png";
import InventoryIcon from "../Image/inventory.png";

import { Link } from "react-router-dom";
import Profile from "./Profile/Profile";
const Header = () => {
  return (
    <div className="header-container">
       <div className="company-logo">
        <Link to="/">
          <img src={InventoryIcon} alt="inventoryIcon" className="companylogo" />
           <h1>INVENTORY</h1>
        </Link>
      </div>
      <div className="header-container-wrapper">
      <div className="search-container">
        <input className="input-grey-rounded" type="text" placeholder="Search Anything"></input>
      </div>
        <div className="dropDown-profile">
          <Profile />
        </div>
      </div>
      </div>      
  );
};

export default Header;
