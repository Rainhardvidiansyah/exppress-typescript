import {Router} from "express";
import IRouter from "./RouterInterface";

abstract class BaseRoutes{

    public router:Router;

    constructor(){
        this.router = Router();
        this.routes();
    }

    abstract routes():void
}

export default BaseRoutes;