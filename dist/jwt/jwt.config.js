"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class Token {
    constructor() { }
    static getJwtToken(payload) {
        return jsonwebtoken_1.default.sign({
            user: payload,
        }, this.seed, { expiresIn: this.expired });
    }
    static checkToken(userToken) {
        return new Promise((resolve, reject) => {
            jsonwebtoken_1.default.verify(userToken, this.seed, (err, decoded) => {
                if (err) {
                    // Invalid token
                    reject();
                }
                else {
                    // Valid token
                    resolve(decoded);
                }
            });
        });
    }
}
Token.seed = "tasky-jwt-secret_seed";
Token.expired = "24h";
exports.default = Token;
