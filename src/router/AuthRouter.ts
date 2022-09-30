import BaseRoutes from "./BaseRouter";
import AuthController from "../controller/AuthController";

class AuthRouter extends BaseRoutes {

    routes(): void {
        this.router.post("/register", AuthController.register);
        this.router.post("/login", AuthController.authenticate)
    }

}

export default new AuthRouter().router;