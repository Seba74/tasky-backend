import jwt from "jsonwebtoken";
import "dotenv/config";
export default class Token {
  private static seed: string = process.env.TOKEN || "tasky-jwt-secret_seed";
  private static expired: string = "30d";
  constructor() {}

  static async createJwtToken(payload: any): Promise<string> {
    return jwt.sign(
      {
        user: payload,
      },
      this.seed,
      { expiresIn: this.expired }
    );
  }

  static async validateToken(token: string): Promise<string> {
    return new Promise((resolve, reject) => {
      jwt.verify(token, this.seed, (error, decoded) => {
        if (error) {
          reject(false);
        } else {
          const newToken = this.createJwtToken(decoded);
          resolve(newToken);
        }
      });
    });
  }
}
