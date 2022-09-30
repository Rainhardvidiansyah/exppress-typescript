import bodyParser, { json, urlencoded } from 'body-parser';
import express, {Application, Express, request, response} from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import compression from 'compression';
import helmet from 'helmet';
import cors from 'cors';

//router
import UserRoutes from "./router/UserRouter"
import AuthRouter from './router/AuthRouter';


class App{
    
    public app: Application;
    constructor(){
        this.app = express();
        this.plugin();
        this.routes();
        dotenv.config();
    }

    protected plugin():void{
        this.app.use(bodyParser.json());
        this.app.use(morgan("dev"));
        this.app.use(compression());
        this.app.use(helmet());
        this.app.use(cors());
    }

    protected routes():void{
        this.app.use("/api/v1/user", UserRoutes);
        this.app.use("/api/v1/auth", AuthRouter);
    }
}

const app = new App().app;
app.listen(process.env.PORT,
    () => {
    console.log(`Your app is running on ${process.env.PORT}`);
    console.log(process.env.DB_HOST);
})





