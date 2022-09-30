"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseRouter_1 = __importDefault(require("./BaseRouter"));
const AuthController_1 = __importDefault(require("../controller/AuthController"));
const ValidationAuthData_1 = __importDefault(require("../middleware/ValidationAuthData"));
class AuthRouter extends BaseRouter_1.default {
    routes() {
        this.router.post("/register", ValidationAuthData_1.default, AuthController_1.default.register);
        this.router.post("/login", ValidationAuthData_1.default, AuthController_1.default.authenticate);
    }
}
exports.default = new AuthRouter().router;
