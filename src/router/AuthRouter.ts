import BaseRoutes from "./BaseRouter";
import AuthController from "../controller/AuthController";
import ValidationAuthData from "../middleware/ValidationAuthData";

class AuthRouter extends BaseRoutes {

    routes(): void {
        this.router.post("/register", ValidationAuthData, AuthController.register);
        this.router.post("/login", ValidationAuthData, AuthController.authenticate)
    }

}

export default new AuthRouter().router;