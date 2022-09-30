import {Request, Response, NextFunction} from "express";
import {body, validationResult} from 'express-validator';

const ValidationAuthData = [
    body('username').isString(),
    body('email').isEmail(),
    body('password').isLength({ min: 6}),
    (req:Request, res:Response, next:NextFunction) => {
        const error = validationResult(req);
        if(!error.isEmpty){
            return res.status(400).json({ error: error.array() });
        }
    next();
    }
]
export default ValidationAuthData;