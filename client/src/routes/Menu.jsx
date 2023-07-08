import React from "react";
import "../scss/style.css";
import { Link } from "react-router-dom";
import close_wh from "../img/icon/close_wh.svg";

export default function Menu() {
  return (
    <>
      <div className="container">
        <div className="menu">
          <button className="btn-wh btn-menu">Menu</button>
          <button className="btn-wh btn-menu">Menu</button>
          <button className="btn-wh btn-menu">Menu</button>
          <button className="btn-wh btn-menu">Menu</button>
          <button className="btn-wh btn-menu">Menu</button>
          <div className="close">
            <Link to={"/"}>
              <img src={close_wh} alt="close" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
