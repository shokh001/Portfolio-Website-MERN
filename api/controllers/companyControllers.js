const company = require("../models/company.model");

//Method : GET
// get All travel book
const getAllCompany = async (req, res) => {
    try {
        const data = await company.find();

        res.status(200).json({
            message: "success",
            data
        });
    } catch (error) {
        res.send(error);
    }
};

//Method : GET
// get one travel book
const getCompanyById = async (req, res) => {
    try {
        const data = await company.findById(req.params.id);

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
const addCompany = async (req, res) => {
    try {
        const {
            link,
            title,
            descr,
            role,
            date } = req.body;

        const newCompany = await company.create({
            link,
            title,
            descr,
            role,
            date
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
const updateCompany = async (req, res) => {
    try {
        const {
            link,
            title,
            descr,
            role,
            date } = req.body;

        const updatedCompany = await company.findByIdAndUpdate(req.params.id, {
            link,
            title,
            descr,
            role,
            date
        });

        res.status(200).json({
            message: "success",
            updatedCompany,
        });
    } catch (error) {
        res.send(error);
    }
};

//Method : DELETE
// REMOVING travel book by its ID
const removeCompany = async (req, res) => {
    try {
        await company.findByIdAndRemove(req.params.id)

        res.status(200).json({
            message: "success"
        });
    } catch (error) {
        res.send(error);
    }
};




module.exports = {
    getAllCompany,
    getCompanyById,
    addCompany,
    updateCompany,
    removeCompany
};
