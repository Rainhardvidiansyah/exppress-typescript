"use strict";
exports.__esModule = true;
var body_parser_1 = require("body-parser");
var express_1 = require("express");
var dotenv_1 = require("dotenv");
var morgan_1 = require("morgan");
var compression_1 = require("compression");
var helmet_1 = require("helmet");
var cors_1 = require("cors");
// import mysql from 'mysql';
//router
var UserRouter_1 = require("./router/UserRouter");
var AuthRouter_1 = require("./router/AuthRouter");
var App = /** @class */ (function () {
    function App() {
        this.app = (0, express_1["default"])();
        this.plugin();
        this.routes();
        dotenv_1["default"].config();
    }
    App.prototype.plugin = function () {
        this.app.use(body_parser_1["default"].json());
        this.app.use((0, morgan_1["default"])("dev"));
        this.app.use((0, compression_1["default"])());
        this.app.use((0, helmet_1["default"])());
        this.app.use((0, cors_1["default"])());
    };
    App.prototype.routes = function () {
        this.app.use("/api/v1/user", UserRouter_1["default"]);
        this.app.use("/api/v1/auth", AuthRouter_1["default"]);
    };
    return App;
}());
var app = new App().app;
app.listen(process.env.PORT, function () {
    console.log("Your app is running on ".concat(process.env.PORT));
    console.log(process.env.DB_HOST);
});
