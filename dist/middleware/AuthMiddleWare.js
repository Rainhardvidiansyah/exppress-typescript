"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.auth = void 0;
const auth = (req, res, next) => {
    console.log("TEST MIDDLEWARE IN EXPRESS");
    let authenticated = false;
    if (authenticated) {
        next();
    }
    return res.send("UNAUTHENTICATED!");
};
exports.auth = auth;
