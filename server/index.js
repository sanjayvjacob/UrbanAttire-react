import express from "express";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import multer from "multer";
import path from "path";
import cors from "cors";

const app = express();
const port = 4000;

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB Connection
mongoose.connect(
  "mongodb+srv://sanjayvinodjacob:vQMUBDkaJyY0xOqA@cluster0.aodzic9.mongodb.net/UrbanAttire"
);

//API creation
// Routes
app.get("/", (req, res) => {
  res.send("Express app is running");
});
// Start Server
app.listen(port, (error) => {
  if (!error) {
    console.log("Server Running on Port " + port);
  } else {
    console.log("Error : " + error);
  }
});

//Image Storage Engine

const storage = multer.diskStorage({
  destination: "./upload/images",
  filename: (req, file, cb) => {
    return cb(
      null,
      `${file.fieldname}_${Date.now()}_${path.extname(file.originalname)}`
    );
  },
});
