const aboutMe = require("../models/aboutMe.model");

//Method : GET
// get All travel book
const getAllMe = async (req, res) => {
    try {
        const data = await aboutMe.find();

        res.status(200).json({
            message: "success",
            data
        });
    } catch (error) {
        res.send(error);
    }
};

// //Method : GET
// // get one travel book
// const getCompanyById = async (req, res) => {
//     try {
//         const data = await company.findById(req.params.id);

//         if (!data) {
//             return res.status(404).json({
//                 message: "Not found",
//             })
//         }

//         return res.status(200).json({
//             message: "success",
//             data,
//         });
//     } catch (error) {
//         res.send(error);
//     }
// };

//Method : POST
// add travel book
const addMe = async (req, res) => {
    try {
        const {
            descr,
            technologies,
            image,
            resume,
            firstHeroSite,
            secondHeroSite } = req.body;

        const newCompany = await aboutMe.create({
            descr,
            technologies,
            image,
            resume,
            firstHeroSite,
            secondHeroSite
        });

        res.status(201).json({
            message: "success",
            newCompany,
        });
    } catch (error) {
        res.send(error);
    }
};

//Method : PUT
// edit travel book by its ID
const updateMe = async (req, res) => {
    try {
        const {
            descr,
            technologies,
            image,
            resume,
            firstHeroSite,
            secondHeroSite } = req.body;

        const updatedCompany = await aboutMe.findOneAndUpdate({
            descr,
            technologies,
            image,
            resume,
            firstHeroSite,
            secondHeroSite
        });

        res.status(200).json({
            message: "success",
            updatedCompany,
        });
    } catch (error) {
        res.send(error);
    }
};

// //Method : DELETE
// // REMOVING travel book by its ID
// const removeCompany = async (req, res) => {
//     try {
//         await company.findByIdAndRemove(req.params.id)

//         res.status(200).json({
//             message: "success"
//         });
//     } catch (error) {
//         res.send(error);
//     }
// };




module.exports = {
    getAllMe,
    updateMe,
    addMe
};
