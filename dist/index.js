"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = __importDefault(require("body-parser"));
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const morgan_1 = __importDefault(require("morgan"));
const compression_1 = __importDefault(require("compression"));
const helmet_1 = __importDefault(require("helmet"));
const cors_1 = __importDefault(require("cors"));
//router
const UserRouter_1 = __importDefault(require("./router/UserRouter"));
const AuthRouter_1 = __importDefault(require("./router/AuthRouter"));
class App {
    constructor() {
        this.app = (0, express_1.default)();
        this.plugin();
        this.routes();
        dotenv_1.default.config();
    }
    plugin() {
        this.app.use(body_parser_1.default.json());
        this.app.use((0, morgan_1.default)("dev"));
        this.app.use((0, compression_1.default)());
        this.app.use((0, helmet_1.default)());
        this.app.use((0, cors_1.default)());
    }
    routes() {
        this.app.use("/api/v1/user", UserRouter_1.default);
        this.app.use("/api/v1/auth", AuthRouter_1.default);
    }
}
const app = new App().app;
app.listen(process.env.PORT, () => {
    console.log(`Your app is running on ${process.env.PORT}`);
    console.log(process.env.DB_HOST);
});
