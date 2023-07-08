const mongoose = require("mongoose");

const wordsSchema = mongoose.Schema(
  {
    group: {
      type: String,
      required: true,
    },
    word: {
      type: String,
      required: true,
    },
    pronunciation: {
      type: String,
      required: false,
    },
    meaning1: {
      type: String,
      required: true,
    },
    meaning2: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

const Words = mongoose.model("Words", wordsSchema);

module.exports = Words;

