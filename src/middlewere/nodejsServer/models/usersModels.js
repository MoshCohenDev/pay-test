const mongoose = require("mongoose");
const Joi = require("joi");

const userSchema = new mongoose.Schema({
    userName: String,
    password: Number,
    firstName: String,
    lastName: String,
    id: Number,
});
const usersModel = mongoose.model("users", userSchema);
exports.usersModel = usersModel;

exports.validUser = (_bodyData) => {
    let joiSchema = Joi.object({
        userName: Joi.string().min(2).max(99).required(),
        password: Joi.number().min(2).max(99),
        firstName: Joi.string().min(1).max(9999).required(),
        lastName: Joi.string().min(1).max(9999).required(),
        id: Joi.number().min(1).max(10).required(),
    });
    return joiSchema.validate(_bodyData);
};
