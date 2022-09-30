"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ResponseData {
    generateResponse(status, data) {
        console.log(status + data);
    }
}
let code = 0;
let data = "";
exports.default = new ResponseData().generateResponse(code, data);
