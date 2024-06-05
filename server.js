import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
dotenv.config({ path: "./.env.dev" });
const PORT = 3000;
const app = express();

connectDB();

app.use(
  cors({
    origin: process.env.ORIGIN_URL,
    credentials: true,
  })
);
app.use(express.json({ limit: "20kb" }));
app.use(express.urlencoded({ extended: true, limit: "20kb" }));
app.use(express.static("public"));

app.listen(PORT, () => {
  console.log(`server is running at  http://localhost:${PORT}`);
});
