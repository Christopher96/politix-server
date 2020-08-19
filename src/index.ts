import express from "express";
import mongoose from "mongoose";
import path from "path";
import bodyParser from "body-parser";
import morgan from "morgan";

import API from "./routes/API";

require("dotenv").config();

const app = express();
const publicPath = path.join(__dirname, "/public");

app.use(bodyParser.json());

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

const mongoHost = process.env.MONGO_HOST || "localhost";
const mongoPort = process.env.MONGO_PORT || "4000";

const mongoUri =
  process.env.MONGODB_URI || `mongodb://${mongoHost}:${mongoPort}/politix`;

mongoose.connect(mongoUri, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

const db = mongoose.connection;

db.once("open", async () => {
  console.log("Connected to database");
});
db.on("error", () => {
  console.log("Error connecting to database");
});

const host = process.env.HOST || "localhost";
const port = Number.parseInt(process.env.PORT!) || 8000;

app.use("/api", new API().get());

app.listen(port, host, () => {
  console.log(`React SSR App is running: http://${host}:${port}`);
});

export default app;
