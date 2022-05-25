const router = require("express").Router();

const {
    getAllCompany,
    getCompanyById,
    addCompany,
    updateCompany,
    removeCompany
} = require("../controllers/companyControllers");

router.get("/", getAllCompany);
router.get("/:id", getCompanyById);
router.post("/add", addCompany);
router.put("/:id", updateCompany);
router.delete("/:id", removeCompany);

module.exports = router;
