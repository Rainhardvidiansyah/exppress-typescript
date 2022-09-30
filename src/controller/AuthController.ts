import {Router, Request, Response} from "express";
const db = require ("../db/models")



class AuthController{

         register = async (req:Request, res:Response): Promise<Response> => {
            let {username, email, password} = req.body;
            const create = await db.user.create({
               username, email, password
            })
            return res.send(`User with username ${username} has registered`);
         }


         authenticate(req:Request, res:Response):Response{
            return res.send();
         }


}

export default new AuthController();