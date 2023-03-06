import express, { json } from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/connectDB.js";
import route from "./routes/taskRoutes.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors({
  origin: ["http://localhost:3000", "https://darkside-task-app.onrender.com"]
}));
app.use("/api/tasks", route);

connectDB();

app.get("/", (req, res) => {
  res.send("Home page");
});

// create data

// read data

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
