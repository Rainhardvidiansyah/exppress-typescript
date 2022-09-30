import {Router, Request, Response} from "express";
const db = require ("../db/models")

import PasswordEncoder from "../utils/PasswordEncoder";

class AuthController{

         register = async (req:Request, res:Response): Promise<Response> => {
            let {username, email, password} = req.body;

            const encodedPassword:string = await PasswordEncoder.encoder(password);

            await db.user.create( {username, email, password:encodedPassword} )

            return res.send(`User with username ${username} has registered`);
         }


         authenticate(req:Request, res:Response):Response{
            return res.send();
         }


}

export default new AuthController();