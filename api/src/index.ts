import express from "express";
import mongoose from "mongoose";
import { songsRouter } from "./routes/songs";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3001;

mongoose.connect(process.env.MONGODB_URI!, {});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

app.use(songsRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
