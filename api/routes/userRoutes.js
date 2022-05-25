const router = require("express").Router();

const {
    login,
    register,
    removeUser,
    getAllUser,
    updateUser,
    getUserById
} = require("../controllers/userControllers");


//REGISTER
router.post("/register", register);

//LOGIN
router.post("/login", login);

//GET USER
router.get("/", getAllUser);

//GET ID USER
router.get("/:id", getUserById);

//DETELE USER
router.delete("/:id", removeUser)

//UPDATE USER
router.put("/:id", updateUser)

module.exports = router;
