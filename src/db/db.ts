import mongoose, { ConnectOptions } from "mongoose";
import "dotenv/config";

const { MONGO_USER, MONGO_PASS, MONGO_PATH } = process.env;

export const connect = async () => {
  mongoose.connect(`mongodb+srv://${MONGO_USER}:${MONGO_PASS}${MONGO_PATH}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  } as ConnectOptions);

  mongoose.connection.on("connected", () => {
    console.log("DB is connected");
  });

  mongoose.connection.on("error", (err) => {
    console.log("DB is NOT connected", err);
  });
};
