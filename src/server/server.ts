import express, { Application, Request, Response, NextFunction } from "express";
import bodyParser from "body-parser";
import project from "../routes/project";
import role from "../routes/role";
import auth from "../routes/auth";
import cors from "cors";
import "dotenv/config";

export default class Server {
  public app: Application;
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
    this.app.use(cors({ origin: true, credentials: true }));
  }

  private configureRoutes() {
    this.app.use("/auth", auth);
    // this.app.use("/user", user);
    this.app.use("/project", project);
    this.app.use("/role", role);
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
