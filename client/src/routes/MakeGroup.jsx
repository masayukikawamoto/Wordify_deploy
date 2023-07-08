import React, { useState } from "react";
import { Form, useNavigate } from "react-router-dom";
import "../scss/style.css";
import CreateList from "./CreateList";
import question from "../img/icon/question_bk.svg";
import Header from "./Header";
import Footer from "./Footer";

const MakeGroup = () => {
  const navigate = useNavigate();
  const [newGroup, setNewGroup] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setNewGroup((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
    console.log(newGroup);
  };

  const handleClick = (e) => {
    e.preventDefault();
    navigate("create");
    console.log(newGroup);
  };

  return (
    <>
      <Header />

      <div className="container">
        <h1>Make a group</h1>
        <div className="question">
          {/* <h1>グループを登録</h1> */}
          {/* <h2>グループを登録</h2> */}
          <h3>グループを作成</h3>
          {/* <h4>グループを登録</h4> */}
          <img className="icon" src={question} alt="search" />
        </div>
        <Form>
          <label htmlFor="input" className="label">
            グループ
          </label>
          <input
            id="input"
            className="form"
            type="text"
            value={newGroup.group}
            name="newGroup"
            placeholder="例:  英語、IT、仕事、グループ１など"
            onChange={handleChange}
          ></input>
        </Form>
        <button onClick={handleClick} className="btn">
          グループを登録
        </button>
        {/* <button onClick={() => navigate(-1)}>戻る</button> */}
      </div>
      <CreateList group={newGroup} />
      <Footer />
    </>
  );
};

export default MakeGroup;
