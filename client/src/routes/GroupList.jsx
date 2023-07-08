import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../scss/style.css";
import WordList from "./WordList";
import Modal from "./Modal";

export default function GroupList() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [wordList, setWordList] = useState([]);
  const [selectedWord, setSelectedWord] = useState(null);
  const [groupListShow, setGroupListShow] = useState(true);
  const [wordListShow, setWordListShow] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [updatedWord, setUpdatedWord] = useState();

  //データの取得
  useEffect(() => {
    axios
      .get("https://wordify.onrender.com/api/allwords")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  //groupの種類を取得
  const extractGroupTypes = () => {
    const groupTypes = new Set();
    data.forEach((item) => {
      groupTypes.add(item.group);
    });
    return Array.from(groupTypes);
  };

  //groupリストを表示
  const createGroupButtons = () => {
    return extractGroupTypes().map((group) => (
      <button
        key={group}
        onClick={() => handleGroupClick(group)}
        className="group-list"
      >
        {group}
      </button>
    ));
  };

  //グループ名のクリックでその中のワードを表示
  const handleGroupClick = (group) => {
    setSelectedGroup(group);
    const wordButtons = data
      .filter((item) => item.group === group)
      .map((item) => (
        <button
          key={item._id}
          onClick={() => handleWordClick(item)}
          className="word-list btn-max"
        >
          {item.word}
        </button>
      ));
    setWordList(wordButtons);
    setGroupListShow(false);
    setWordListShow(true);
  };

  //ワードをクリックで詳細を表示
  const handleWordClick = (word) => {
    setShowModal(true);
    setSelectedWord(word);
    setUpdatedWord(word);
  };

  const refreshPage = () => {
    window.location.reload(false);
  };

  return (
    <>
      <div className="grouplist">
        <div className="container">
          <div>{groupListShow ? <div>{createGroupButtons()}</div> : ""}</div>
          <div>
            {wordListShow ? (
              <button className="btn-bk" onClick={refreshPage}>
                戻る
              </button>
            ) : (
              ""
            )}
          </div>
          <div>{wordList}</div>
        </div>
        <div>
          <Modal
            showFlag={showModal}
            setShowModal={setShowModal}
            content="ワード詳細"
            update={updatedWord}
            selectedWord={selectedWord}
          />
        </div>
      </div>
    </>
  );
}
