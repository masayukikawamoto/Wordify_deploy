require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const port = process.env.PORT || 3001;
const URL = process.env.URL;
const DB_NAME = process.env.DB_NAME;
const Words = require("./models/Words");

const corsOptions = {
  origin: "https://wordifyapp.onrender.com",
};
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors(corsOptions));

mongoose
  .connect("mongodb+srv://" + URL + DB_NAME + "?retryWrites=true&w=majority")
  .then(() => {
    console.log("MongoDB connected!");
  })
  .catch((error) => {
    console.error("MongoDB接続エラー:", error);
  });

app.get("/", (req, res) => {
  res.send("Express is here.");
});

app.post("/createword", (req, res) => {
  Words.create({
    group: req.body.group,
    word: req.body.word,
    pronunciation: req.body.pronunciation,
    meaning1: req.body.meaning1,
    meaning2: req.body.meaning2,
  })
    .then((doc) => console.log(doc))
    .catch((err) => console.log(err));
});

app.get("/allwords", (req, res) => {
  Words.find()
    .then((items) => res.json(items))
    .catch((err) => console.log(err));
});

app.get("/getWords:${query}", (req, res) => {
  Words.find()
    .then((items) => res.json(items))
    .catch((err) => console.log(err));
});

app.delete("/delete/:id", (req, res) => {
  Words.findByIdAndDelete({ _id: req.params.id })
    .then((doc) => console.log(doc))
    .catch((err) => console.log(err));
});

app.put("/update/:id", (req, res) => {
  console.log(req.params);
  console.log(req.body);
  Words.findByIdAndUpdate(
    { _id: req.params.id },
    {
      group: req.body.group,
      word: req.body.word,
      pronunciation: req.body.pronunciation,
      meaning1: req.body.meaning1,
      meaning2: req.body.meaning2,
    }
  )
    .then((doc) => console.log(doc))
    .catch((err) => console.log(err));
});

app.get("/getgroup", (req, res) => {
  Words.find()
    .then((items) => res.json(items))
    .catch((err) => console.log(err));
});

app.listen(port, function () {
  console.log("Server is running");
});
