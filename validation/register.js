const validator = require("validator"); 
const validText = require("./valid-text");

module.exports = function validateRegisterInput(data) {
    let errors = {};

    data.handle = validText(data.handle) ? data.handle : '';
    data.email = validText(data.email) ? data.email : '';
    data.password = validText(data.password) ? data.password : '';

    if (!validator.isLength(data.handle, { min: 2, max: 30})) {
        errors.handle = "Handle must be between 2 and 30 chars";
    }

    if (validator.isEmpty(data.handle)) {
        errors.handle = "Handle field is required";
    }

    if (validator.isEmpty(data.email)) {
        errors.email = "Email field is required";
    }

    if (!validator.isEmail(data.email)) {
        errors.email = "Email is invalid";
    }

    if (validator.isEmpty(data.password)) {
        errors.password = "Password is required";
    }

    if (!validator.isLength(data.password, { min: 2, max: 30})) {
        errors.password = "Password length must be between 2 and 30 chars";
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    }
}