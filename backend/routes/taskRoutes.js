import mongoose from "mongoose";
import express from "express";

import { createTask, deleteTask, getTask, getTasks, updateTask } from "../controllers/taskController.js";

const route = express.Router();

route.route("/").get(getTasks).post(createTask);
route.route("/:id").get(getTask).delete(deleteTask).put(updateTask);

route.get("/:id", getTask)
route.delete("/:id", deleteTask);
route.patch("/:id", updateTask);

export default route;
