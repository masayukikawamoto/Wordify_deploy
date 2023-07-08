import React from "react";
import { useNavigate, useRouteError } from "react-router-dom";
import "../scss/style.css";
import backlogo from "../img/illustration/backlogo.svg";

export default function ErrorPage() {
  const navigate = useNavigate();
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <div className="container">
        <h1>Oops!</h1>"<p>Sorry, an unexpected error has occurred.</p>
        <br />
        <p>お探しのページは存在しません。</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
        <br />
        <button onClick={() => navigate(-1)} className="btn-bk">
          戻る
        </button>
        <br />
        <img src={backlogo} alt="backlogo" />
      </div>
    </div>
  );
}
