import React from "react";
import { Form, Link } from "react-router-dom";
import axios from "axios";
import "../scss/style.css";
import search_wh from "../img/icon/search_wh.svg";
import menu_wh from "../img/icon/menu_wh.svg";
import plus_wh from "../img/icon/plus_wh.svg";

export default function Footer() {
  return (
    <>
      <div className="footer-back">
        <div className="footer-page">
          {/* <Link to={"/"}> */}
          <img src={search_wh} alt="m logo" />
          <Form id="search-form" role="search">
            <input
              id="q"
              aria-label="Search words"
              placeholder="Search"
              type="search"
              name="q"
            />
            <div id="search-spinner" aria-hidden hidden={true} />
            <div className="sr-only" aria-live="polite"></div>
          </Form>
          {/* </Link> */}

          <Link to={"/createword"}>
            <img src={plus_wh} alt="m logo" />
          </Link>

          <Link to={"/menu"}>
            <img src={menu_wh} alt="m logo" />
          </Link>
        </div>
      </div>
    </>
  );
}
