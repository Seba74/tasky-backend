"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = require("./db/db");
const server_1 = __importDefault(require("./server/server"));
const server = new server_1.default();
// Connect to database
(0, db_1.connect)();
server.start(() => {
    console.log(`Server listening on port ${server.port}`);
});
