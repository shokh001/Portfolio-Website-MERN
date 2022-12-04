const { Schema, model } = require("mongoose");

const AboutMeSchema = new Schema(
    {
        descr: {
            type: String,
            required: true,
        },
        technologies: {
            type: Array,
            required: true
        },   
        image: {
            type: String,
            required: true
        },
        resume: {
            type: String,
            required: true
        },
        firstHeroSite: {
          type: String,
          required: true
        },
        secondHeroSite: {
          type: String,
          required: true
        },
    },
    { timestamps: true }
);

module.exports = model("AboutMe", AboutMeSchema);
