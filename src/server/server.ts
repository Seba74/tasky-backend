// EXPRESS AND CONFIGURATIONS
import express, { Application, Request, Response, NextFunction } from "express";
import bodyParser from "body-parser";
// ROUTES
import role from "../routes/role";
import auth from "../routes/auth";
import task from "../routes/task";
import priority from "../routes/priority";
// CORS
import cors from "cors";
// VARIABLES
import "dotenv/config";

export default class Server {
  public app: Application;
  public api = "/api/v1/";
  public port: number = Number(process.env.PORT) || 3000;

  constructor() {
    this.app = express();
    this.configureMiddlewares();
    this.configureRoutes();
    this.configureErrorHandling();
  }

  private configureMiddlewares() {
    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.app.use(bodyParser.json());
    this.app.use(cors({
      origin: ['https://guidden.netlify.app', 'https://taskapp-53xk.onrender.com'],
      optionsSuccessStatus: 200,
      credentials: true
    }));
  }

  private configureRoutes() {
    this.app.use(this.api + "auth", auth);
    this.app.use(this.api + "task", task);
    this.app.use(this.api + "role", role);
    this.app.use(this.api + "priority", priority);
  }

  private configureErrorHandling() {
    this.app.use(
      (err: Error, req: Request, res: Response, next: NextFunction) => {
        console.error(err);
        res.status(500).send("Internal Critical Server Error");
      }
    );
  }

  public start(callback: () => void) {
    this.app.listen(this.port, callback);
  }
}
