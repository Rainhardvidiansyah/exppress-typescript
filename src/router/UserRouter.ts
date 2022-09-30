import BaseRoutes from "./BaseRouter";
import UserController from "../controller/UserController";
import {auth} from "../middleware/AuthMiddleWare"


class UserRoutes extends BaseRoutes{


    routes():void {
        this.router.get("/:id", auth,  UserController.show);  
        this.router.get("/", UserController.index);
        this.router.post("/", UserController.create);
        this.router.put("/:id", UserController.update);
        this.router.delete("/:id", UserController.delete);

    }

    
   
}
export default new UserRoutes().router;

