const { ToDo } = require("../models/TodoModel");

const createTask = async (req, res) => {
  try {
    const { userId, title, task, date, time } = req.body;
    const taskData = {
      userId: userId,
      task: task,
      date: date,
      time: time,
    };
    const tasks = await ToDo.create(taskData);
    res.status(201).json(tasks);
  } catch (error) {
    console.error("Error creating task : ", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getTask = async (req, res) => {
  try {
    const { userId } = req.query;
    const tasks = await ToDo.findAll({ where: { userId: userId } });
    if (tasks.length > 0) {
      res.status(200).json(tasks);
    } else {
      res.status(404).json({ error: "Tasks not found" });
    }
  } catch (error) {
    console.error("Error getting Tasks: ", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { createTask, getTask };
