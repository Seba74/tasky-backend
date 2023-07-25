import jwt from "jsonwebtoken";

export default class Token {
  private static seed: string = "tasky-jwt-secret_seed"
  private static expired: string = "24h";
  constructor() {}

  static getJwtToken(payload: any): string {
    return jwt.sign(
      {
        user: payload,
      },
      this.seed,
      { expiresIn: this.expired }
    );
  }

  static checkToken(userToken: string) {
    return new Promise((resolve, reject) => {
      jwt.verify(userToken, this.seed, (err, decoded) => {
        if (err) {
          // Invalid token
          reject();
        } else {
          // Valid token
          resolve(decoded);
        }
      });
    });
  }
}
