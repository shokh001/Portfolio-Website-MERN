const User = require("../models/user");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

//Method : POST
// Register

const register = async (req, res) => {
    const newUser = new User({
        isAdmin: req.body.isAdmin,
        username: req.body.username,
        password: CryptoJS.AES.encrypt(
            req.body.password,
            process.env.PASS_SEC
        ).toString(),
    });

    try {
        const savedUser = await newUser.save();
        res.status(200).json(savedUser);
    } catch (err) {
        res.status(500).json(err);
    }
}

//Method : POST
// Lofin

const login = async (req, res) => {
    try {
        const user = await User.findOne({ username: req.body.username });
        !user && res.status(401).json("Wrong credentials!");

        const hashedPassword = CryptoJS.AES.decrypt(
            user.password,
            process.env.PASS_SEC
        );
        const OriginalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);

        OriginalPassword !== req.body.password &&
            res.status(401).json("Wrong credentials!");

        const accessToken = jwt.sign(
            {
                id: user._id,
            },
            process.env.JWT_SEC,
            { expiresIn: "3d" }
        );

        const { password, ...others } = user._doc;

        res.status(200).json({ ...others, accessToken });
    } catch (err) {
        res.status(500).json(err);
    }
}

//Method : DELETE

const removeUser = async (req, res) => {
    try {
        await User.findByIdAndRemove(req.params.id)

        res.status(200).json({
            message: "success"
        });
    } catch (error) {
        res.send(error);
    }
};

const getAllUser = async (req, res) => {
    try {     
        const data = await User.find();

        res.status(200).json({
            message: "success",
            data: data.reverse()
        });
    } catch (error) {
        res.send(error);
    }
};

const updateUser = async (req, res) => {
    try {
        const {
            name,
            isAdmin,
            username,
            email,
            password } = req.body;

        const updatedCompany = await User.findByIdAndUpdate(req.params.id, {
            name,
            isAdmin,
            username,
            email,
            password: CryptoJS.AES.encrypt(
                password,
                process.env.PASS_SEC
            ).toString(),
        });

        res.status(200).json({
            message: "success",
            updatedCompany,
        });
    } catch (error) {
        res.send(error);
    }
};

const getUserById = async (req, res) => {
    try {
        const data = await User.findById(req.params.id);

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


module.exports = {
    login,
    register,
    removeUser,
    getAllUser,
    updateUser,
    getUserById
};
