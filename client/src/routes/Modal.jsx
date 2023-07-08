import React, { useEffect, useState } from "react";
import { Form, Link } from "react-router-dom";
import axios from "axios";
import "../scss/style.css";
import close_bk from "../img/icon/close_bk.svg";

const Modal = (props) => {
  const [update, setUpdate] = useState([]);
  // const [update, setUpdate] = useState(props.update);
  // console.log(props);
  // console.log(props.selectedWord);
  // console.log(props.update);
  let data = props.update;
  console.log(data);
  // console.log(update);

  useEffect(() => {
    setUpdate(props.update);
  }, [props.update]);

  console.log(update);
  // console.log(update.word);
  // console.log(props.update.word);

  const closeModal = () => {
    props.setShowModal(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdate((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const saveUpdate = () => {
    axios
      .put(`https://wordify.onrender.com/update/${update._id}`, update)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    closeModal();
    window.location.reload();
    console.log(update);
  };

  return (
    <>
      {props.showFlag ? (
        <div className="overlay">
          <div className="container modalContent">
            <p>{props.content}</p>
            {/* <p>{props.update.group}</p>
            <p>{props.update.word}</p>
            <p>{props.update.pronunciation}</p>
            <p>{props.update.meaning1}</p>
            <p>{props.update.meaning2}</p> */}

            <Form className="word-detail">
              <label className="label">グループ</label>
              <input
                className="form"
                name="group"
                placeholder="group"
                value={data.group || ""}
                onChange={handleChange}
              />
              <label className="label">ワード</label>
              <input
                className="form"
                name="word"
                placeholder="word"
                value={data.word || ""}
                onChange={handleChange}
              />
              <label className="label">読み方</label>{" "}
              <input
                className="form"
                name="pronunciation"
                placeholder="pronunciation"
                value={data.pronunciation || ""}
                onChange={handleChange}
              />
              <label className="label">意味１</label>{" "}
              <input
                className="form"
                name="meaning1"
                placeholder="meaning1"
                value={data.meaning1 || ""}
                onChange={handleChange}
              />
              <label className="label">意味２</label>{" "}
              <input
                className="form"
                name="meaning2"
                placeholder="meaning2"
                value={data.meaning2 || ""}
                onChange={handleChange}
              />
            </Form>

            <button onClick={saveUpdate} className="btn-bk btn left">
              変更を保存
            </button>
            <button onClick={closeModal} className="btn-bk btn-right">
              削除
            </button>
            <div className="close word-close">
              <img src={close_bk} alt="m logo" onClick={closeModal} />
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Modal;
