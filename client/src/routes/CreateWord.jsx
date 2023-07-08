import { Form, useNavigate } from "react-router-dom";
import "../scss/style.css";
import { useState } from "react";
import axios from "axios";
import Header from "./Header";
import Footer from "./Footer";

export default function CreateWord(props) {
  const navigate = useNavigate();
  // console.log(props.group.newGroup);
  console.log(props);
  const [words, setWords] = useState({
    group: "",
    word: "",
    pronunciation: "",
    meaning1: "",
    meaning2: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setWords((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleClick = (e) => {
    console.log(words);
    e.preventDefault();

    axios
      .post("https://wordify.onrender.com/api/createword", words)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    navigate("wordlists");
  };

  return (
    <>
      <Header />

      <div className="container">
        <h1>Create word</h1>
        <h3>単語を登録</h3>
        <br />
        {/* <h4 className="box label">単語グループ：{props.group.newGroup}</h4> */}
        <br />
        <Form method="post">
          <input
            onChange={handleChange}
            // value={props.group.newGroup}
            name="group"
            placeholder="グループ"
            className="form"
          />
          <br />
          <label htmlFor="input" className="label">
            単語
          </label>
          <input
            id="input"
            onChange={handleChange}
            value={words.word}
            name="word"
            placeholder="単語"
            className="form"
          />
          <label htmlFor="input" className="label">
            読み
          </label>
          <input
            id="input"
            onChange={handleChange}
            value={words.pronunciation}
            name="pronunciation"
            placeholder="読み"
            className="form"
          />
          <label htmlFor="input" className="label">
            意味１
          </label>
          <textarea
            id="textarea"
            onChange={handleChange}
            value={words.meaning1}
            name="meaning1"
            placeholder="意味１"
            className="form"
            cols="30"
            rows="10"
          ></textarea>
          <label htmlFor="input" className="label">
            意味２
          </label>
          <textarea
            id="textarea"
            onChange={handleChange}
            value={words.meaning2}
            name="meaning2"
            placeholder="意味２"
            className="form"
          ></textarea>
        </Form>
        <div>
          <button onClick={() => navigate(-1)} className="btn-bk btn-left">
            戻る
          </button>
          <button onClick={handleClick} className="btn-bk btn-right">
            保存
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}
