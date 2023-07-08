import React from "react";
import "../scss/style.css";
import w_icon_wh from "../img/icon/w_icon_wh.svg";
import wordify_logo_h25 from "../img/icon/wordify_logo_h25.svg";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <div className="header-container">
        <div className="header-back">
          <diV className="header-page">
            <Link to={"/"}>
              <img src={w_icon_wh} alt="m logo" />
            </Link>
            <Link to={"/"}>
              <img src={wordify_logo_h25} alt="wordify_logo" />
            </Link>
          </diV>
        </div>
      </div>
    </>
  );
}
