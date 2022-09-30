"use strict";
exports.__esModule = true;
var express_1 = require("express");
var BaseRoutes = /** @class */ (function () {
    function BaseRoutes() {
        this.router = (0, express_1.Router)();
        this.routes();
    }
    return BaseRoutes;
}());
exports["default"] = BaseRoutes;
