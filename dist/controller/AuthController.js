"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db = require("../db/models");
const PasswordEncoder_1 = __importDefault(require("../utils/PasswordEncoder"));
class AuthController {
    constructor() {
        this.register = (req, res) => __awaiter(this, void 0, void 0, function* () {
            let { username, email, password } = req.body;
            const encodedPassword = yield PasswordEncoder_1.default.encoder(password);
            yield db.user.create({ username, email, password: encodedPassword });
            return res.send(`User with username ${username} has registered`);
        });
    }
    authenticate(req, res) {
        return res.send();
    }
}
exports.default = new AuthController();
