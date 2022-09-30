import {Request, Response, NextFunction} from 'express';

export const auth = (req:Request, res:Response, next:NextFunction):any => {
    console.log("TEST MIDDLEWARE IN EXPRESS");

    let authenticated:boolean = false;
    if(authenticated){
        next();
    }
    return res.send("UNAUTHENTICATED!");
    
    
}
