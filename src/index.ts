import { connect } from "./db/db";
import Server from "./server/server";

const server = new Server();

// Connect to database
connect();

server.start(() => {
  console.log(`Server listening on port ${server.port}`);
});
