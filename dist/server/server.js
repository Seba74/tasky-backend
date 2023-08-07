"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// EXPRESS AND CONFIGURATIONS
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
// ROUTES
const role_1 = __importDefault(require("../routes/role"));
const auth_1 = __importDefault(require("../routes/auth"));
const task_1 = __importDefault(require("../routes/task"));
const priority_1 = __importDefault(require("../routes/priority"));
// CORS
const cors_1 = __importDefault(require("cors"));
// VARIABLES
require("dotenv/config");
class Server {
    constructor() {
        this.api = "/api/v1/";
        this.port = Number(process.env.PORT) || 3000;
        this.app = (0, express_1.default)();
        this.configureMiddlewares();
        this.configureRoutes();
        this.configureErrorHandling();
    }
    configureMiddlewares() {
        this.app.use(body_parser_1.default.urlencoded({ extended: true }));
        this.app.use(body_parser_1.default.json());
        this.app.use((0, cors_1.default)({
            origin: 'https://guidden.netlify.app',
            optionsSuccessStatus: 200,
            credentials: true
        }));
    }
    configureRoutes() {
        this.app.use(this.api + "auth", auth_1.default);
        this.app.use(this.api + "task", task_1.default);
        this.app.use(this.api + "role", role_1.default);
        this.app.use(this.api + "priority", priority_1.default);
    }
    configureErrorHandling() {
        this.app.use((err, req, res, next) => {
            console.error(err);
            res.status(500).send("Internal Critical Server Error");
        });
    }
    start(callback) {
        this.app.listen(this.port, callback);
    }
}
exports.default = Server;
