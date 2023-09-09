import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import filmnetLogo from "../../public/images/logo/filmnet-icon.svg";

function Navbar() {
  const { t, i18n } = useTranslation();
  return (
    <div className="nav">
      <div className="page_container">
      <div className="nav-header">
          <div className="nav-title">
            <img loading="lazy" src={filmnetLogo} />
          </div>
        </div>
        <input type="checkbox" id="nav-check" />
        <div className="nav-btn">
          <label htmlFor="nav-check">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>

        <div className="nav-links">
          <Link to="/" className="text-gray-400 hover:text-gray-100">
            {t("home")}
          </Link>
          <Link to="/contents" className="text-gray-400 hover:text-gray-100">
            {t("contents")}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
