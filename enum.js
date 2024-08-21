"use strict";
var errors;
(function (errors) {
    errors["unAuthorized"] = "Un-Authorized";
    errors["noUser"] = "No User Exists";
    errors["internal"] = "Internal";
})(errors || (errors = {}));
const getError = (err) => {
    if (err == errors.unAuthorized) {
        console.info("Blah Blah");
    }
};
getError(errors.unAuthorized);
