const { Schema, model } = require("mongoose");

const company = new Schema({
    link: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true,
    },
    date: {
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
});

module.exports = model("Company", company);
