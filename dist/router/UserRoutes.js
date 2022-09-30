"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseRouter_1 = __importDefault(require("./BaseRouter"));
const UserController_1 = __importDefault(require("../controller/UserController"));
class UserRoutes extends BaseRouter_1.default {
    routes() {
        this.router.get("/", UserController_1.default.show);
        this.router.get("/", UserController_1.default.index);
    }
}
exports.default = new UserRoutes().routes;
