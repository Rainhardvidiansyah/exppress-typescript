"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_validator_1 = require("express-validator");
const ValidationAuthData = [
    (0, express_validator_1.body)('username').isString(),
    (0, express_validator_1.body)('email').isEmail(),
    (0, express_validator_1.body)('password').isLength({ min: 6 }),
    (req, res, next) => {
        const error = (0, express_validator_1.validationResult)(req);
        if (!error.isEmpty) {
            return res.status(400).json({ error: error.array() });
        }
        next();
    }
];
exports.default = ValidationAuthData;
