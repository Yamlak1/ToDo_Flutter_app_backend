const express = require("express");
const router = express.Router();
const {
  createUser,
  getUserByUserName,
} = require("../controllers/UserController");

router.post("/createUser", createUser);
router.get("/getUser", getUserByUserName);

module.exports = router;
