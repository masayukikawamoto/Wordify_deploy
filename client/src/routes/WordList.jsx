import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../scss/style.css";
import Modal from "./Modal";
import WordDetail from "./WordDetail";

export default function WordLists(props) {
  console.log(props);
  console.log(props.oneGroup);
  const navigate = useNavigate();
  const [wordList, setWordList] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [updatedWord, setUpdatedWord] = useState();

  //選択されたグループのワードリストを取得
  axios
    .get("/api/allwords")
    .then((res) => {
      const data = res.data;
      console.log(data);
      const groupWords = data.filter((word) => word.group === props.oneGroup);
      console.log(groupWords);

      //既存のリストをクリア
      const groupLIst = document.getElementById("groupLIst");
      groupLIst.innerHTML = "";

      //groupのwordリストを表示
      groupWords.forEach((word) => {
        const groupWord = document.createElement("button");
        groupWord.textContent = `${word.word},${word._id}`;
        groupWord.setAttribute("data-id", word._id);
        groupWord.className = "word-list btn-max";
        groupLIst.appendChild(groupWord);
      });
    })
    .catch((err) => {
      console.error(err);
    });

  // const deleteWord = (id) => {
  //   axios
  //     .delete(`/delete/${id}`)
  //     .then((res) => console.log(res))
  //     .catch((err) => console.log(err));

  //   window.location.reload();
  // };

  const updateWord = (e) => {
    console.log(e);

    // setUpdatedWord(wordLists);
    setShowModal(true);
  };

  return (
    <><div className="container">
      <button className="btn-bk spacer3" onClick={() => navigate(-1)}>
        戻る
      </button>
      <br />
      <br />
      <br />
      <h3 className="group-list">　{props.oneGroup}</h3>
      <div>
        <div
          id="groupLIst"
          onClick={(e) => updateWord("data-id")}
        ></div>
        <>
          {/* <button
            onClick={() => updateWord(wordList)}
            className="btn-bk btn-min btn-min-left wordlist-btn"
          >
            編集
          </button>
          <button
            onClick={() => deleteWord(wordList._id)}
            className="btn-bk btn-min btn-min-left wordlist-btn"
          >
            削除
          </button> */}
        </>
        <Modal
          showFlag={showModal}
          setShowModal={setShowModal}
          content="情報の編集"
          update={updatedWord}
        />
      </div></div>
    </>
  );
}
