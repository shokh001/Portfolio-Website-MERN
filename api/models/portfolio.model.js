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
    required: false,
  },
  technology: {
    type: Array,
    required: true,
  },
  image: {
    type: String,
    required: false
  }
});

module.exports = model("Portfolio", portfolio);
