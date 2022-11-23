const router = require("express").Router();

const {
    getAllMe,
    updateMe,
    addMe
} = require("../controllers/aboutMeControllers");


//GET USER
router.get("/", getAllMe);

// Add 
router.post("/add", addMe);

//UPDATE USER
router.put("/", updateMe)


module.exports = router;
