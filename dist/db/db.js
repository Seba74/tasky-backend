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
exports.connect = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
require("dotenv/config");
const { MONGO_USER, MONGO_PASS, MONGO_PATH } = process.env;
const connect = () => __awaiter(void 0, void 0, void 0, function* () {
    mongoose_1.default.connect(`mongodb+srv://${MONGO_USER}:${MONGO_PASS}${MONGO_PATH}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    mongoose_1.default.connection.on("connected", () => {
        console.log("DB is connected");
    });
    mongoose_1.default.connection.on("error", (err) => {
        console.log("DB is NOT connected", err);
    });
});
exports.connect = connect;
