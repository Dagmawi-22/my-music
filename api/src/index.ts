import express from "express";
import json from "body-parser";
import songsRouter from "./routes/songs";

const app = express();
app.use(songsRouter);

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});

// import express from "express";
// import mongoose from "mongoose";
// import { router as songsRouter } from "./routes/songs";
// import dotenv from "dotenv";

// dotenv.config();

// const app = express();
// const PORT = 3000;

// Connect to MongoDB
// mongoose.connect(process.env.MONGODB_URI!, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// const db = mongoose.connection;
// db.on("error", console.error.bind(console, "MongoDB connection error:"));
// db.once("open", () => {
//   console.log("Connected to MongoDB");
// });

// // Use the songs router
// app.use(songsRouter);

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
