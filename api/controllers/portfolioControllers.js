const portfolio = require("../models/portfolio.model");

//Method : GET
// get All travel book
const getAllPortfolio = async (req, res) => {
  try {
    const data = await portfolio.find();

    res.status(200).json({
      message: "success",
      data,
    });
  } catch (error) {
    res.send(error);
  }
};

//Method : GET
// get one travel book
const getPortfolioById = async (req, res) => {
  try {
    const data = await portfolio.findById(req.params.id);

    if (!data) {
      return res.status(404).json({
        message: "Not found",
      })
    }

    return res.status(200).json({
      message: "success",
      data,
    });
  } catch (error) {
    res.send(error);
  }
};

//Method : POST
// add travel book
const addPortfolio = async (req, res) => {
  try {
    const { 
      external_link,
      link,
      title,
      descr,
      technology } = req.body;

    const newPorfolio = await portfolio.create({
      external_link,
      link,
      title,
      descr,
      technology
    });

    res.status(201).json({
      message: "success",
      newPorfolio,
    });
  } catch (error) {
    res.send(error);
  }
};

//Method : PUT
// edit travel book by its ID
const updatePortfolio = async (req, res) => {
  try {
    const { 
      external_link,
      link,
      title,
      descr,
      technology } = req.body;

    const updatedPortfolio = await portfolio.findByIdAndUpdate(req.params.id, {
      external_link,
      link,
      title,
      descr,
      technology
    });

    res.status(200).json({
      message: "success",
      updatedPortfolio,
    });
  } catch (error) {
    res.send(error);
  }
};

//Method : DELETE
// REMOVING travel book by its ID
const removePortfolio = async (req, res) => {
  try {
    await portfolio.findByIdAndRemove(req.params.id)

    res.status(200).json({
      message: "success"
    });
  } catch (error) {
    res.send(error);
  }
};




module.exports = {
  getAllPortfolio,
  getPortfolioById,
  addPortfolio,
  updatePortfolio,
  removePortfolio
};
