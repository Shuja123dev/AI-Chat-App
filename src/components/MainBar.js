import "../App";
import React, { useContext, useEffect, useState } from "react";
import AskMe from "../assets/icons/ask-me.svg";
import refreshIcon from "../assets/icons/refresh.svg";
import settingsIcon from "../assets/icons/settings.svg";
import logoutIcon from "../assets/icons/logout.svg";
import AramcoIcon from "../assets/icons/Aramco_icon.svg";
import WorldIcon from '../assets/icons/world-icon.svg'
import { AppContext } from "../context/AppData";
import { tabs } from "./../utils/chatTabs";

const MainBar = () => {
  const { activeTab, setActiveTab } = useContext(AppContext);

  return (
    <div className="main-top">
      <div className="main-inner">
        <div className="content-box">
          <div className="main-top-upper">
            <img src={AskMe} alt="" className="main-logo" />
            <h2>
              Welcome to <span className="lorem-para">MetaBrain</span> 👋
            </h2>
            <p>
              Explore our knowledge bases. Dive into the heart of Aramco with
              Aramco Knowledge or embark on a world of information with World
              Knowledge.
            </p>
          </div>
          <div className="icon-box">
            <button className="mid-btn">
              <img src={refreshIcon} />
            </button>
            <button className="mid-btn">
              <img src={settingsIcon} />
            </button>
            <button className="mid-btn">
              <img src={logoutIcon} />
            </button>
          </div>
        </div>
        <div className="main-btns">
          {tabs.map(({ label, value }, index) => (
            <>
              <button
                onClick={() => setActiveTab(value)}
                className={`${activeTab === value && "active-btn"}`}
              >
                <img src={(index === 0) ? AramcoIcon : WorldIcon} alt="" />
                {label}
              </button>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};
export default MainBar;
