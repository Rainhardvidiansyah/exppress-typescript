"use strict";
exports.__esModule = true;
exports.auth = void 0;
var auth = function (req, res, next) {
    console.log("TEST MIDDLEWARE IN EXPRESS");
    var authenticated = false;
    if (authenticated) {
        next();
    }
    return res.send("UNAUTHENTICATED!");
};
exports.auth = auth;
