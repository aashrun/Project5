const validator = require("email-validator");



const isValid = function (value) {
    if (typeof value === "undefined" || value === null) return false;
    if (typeof value === "string" && value.trim().length === 0) return false;
    return true;
};

const isValidBody = function (data) {
    return Object.keys(data).length > 0;
};


let alphabetTestOfString = function (value) {
    let regex = /^[a-zA-Z\\s]{2,10}$/;
    if (regex.test(value)) {
        return true;
    }
    return false;
};

const isValidSyntaxOfEmail = function (value) {
    if (validator.validate(value.trim())) {
        return true;
    }
    return false;
};

const isValidMobileNum = function (value) {
    if (/^[6-9]\d{9}$/.test(value)) {
        return true;
    }
    return false;
};

const isValidPinCode = (value) => {
    const regEx = /^\s*([0-9]){6}\s*$/
    const result = regEx.test(value)
    return result
}
const isValidPassword = function (value) {
    const passwordregex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    if (passwordregex.test(value)) {
        return true;
    }
    return false;
};

const validateEmail = function (mail) {
    if (/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/.test(mail)) {
        return true;
    }
}

const userIdMatch = function (value){
    let user = /^[0-9a-fA-F]{24}$/.test(value)
    return user
}

module.exports = {isValid, isValidBody, alphabetTestOfString, isValidSyntaxOfEmail, isValidMobileNum, isValidPinCode, isValidPassword, validateEmail, userIdMatch}