const router = require("express").Router();

const {
  getAllPortfolio,
  getPortfolioById,
  addPortfolio,
  updatePortfolio,
  removePortfolio
} = require("../controllers/portfolioControllers");

router.get("/", getAllPortfolio);
router.get("/:id", getPortfolioById);
router.post("/add", addPortfolio);
router.put("/:id", updatePortfolio);
router.delete("/:id", removePortfolio);

module.exports = router;
