import {Request, Response} from "express";


interface AuthInterface{
    register(req:Request, res:Response):Response;
    authenticate(req:Request, res:Response):Response;
}

export default AuthInterface;