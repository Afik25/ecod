import React, { useState } from "react";
import "./header.css";
import { Link } from "react-router-dom";
import LOGO from "../../assets/logo.png";
import { MdMenu, MdClose, MdOndemandVideo } from "../../middlewares/icons";
import Navigation from "./Navigation";
import navLinksData from "./data.json";

const Header = ({ fix }) => {
  const [isDrawer, setIsDrawer] = useState(false);

  return (
    <div
      className={
        fix && isDrawer
          ? "header fixed open-drawer"
          : fix && !isDrawer
          ? "header fixed"
          : !fix && isDrawer
          ? "header open-drawer"
          : "header"
      }
    >
      <div className="container">
        <Link to={"/"} className="link">
          <img src={LOGO} alt="logo-main" className="logo" />
        </Link>
        <div className="drawer" onClick={() => setIsDrawer(!isDrawer)}>
          {isDrawer ? (
            <MdClose className="icon" />
          ) : (
            <MdMenu className="icon" />
          )}
        </div>
        <Navigation navLinksData={navLinksData} />
        <div className="signs">
          <Link to="/cours/reading" className="link button">
            <MdOndemandVideo className="icon" />
            <span>Suivre le cours</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
