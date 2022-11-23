const { Schema, model } = require("mongoose");

const portfolio = new Schema({
  external_link: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  descr: {
    type: String,
    required: true,
  },
  technology: {
    type: Array,
    required: true,
  },
});

module.exports = model("Portfolio", portfolio);
