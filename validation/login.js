const validator = require("validator"); //library of string validators
const validText = require("./valid-text");

module.exports = function(data) {
    let errors = {};

    data.email = validText(data.email) ? data.email : '';
    data.password = validText(data.password) ? data.password : '';

    if (!validator.isEmail(data.email)) { //uses isEmail validator in validator library
        errors.email = "Email is invalid";
    }

    if (validator.isEmpty(data.email)) { 
        errors.email = "Email field is required please";
    }   

    if (validator.isEmpty(data.password)) {
        errors.password = "Password field is required please";
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    }
}