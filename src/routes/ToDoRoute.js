const express = require("express");
const router = express.Router();
const { createTask, getTask } = require("../controllers/ToDoController");

router.post("/createTask", createTask);

router.get("/getTask", getTask);

module.exports = router;
