const { User } = require("../models/UserModel");

const createUser = async (req, res) => {
  try {
    const { fullName, userName, email, phone, password } = req.body;
    const userData = {
      fullName: fullName,
      userName: userName,
      email: email,
      phone: phone,
      password: password,
    };

    const user = await User.create(userData);
    res.status(201).json(user);
  } catch (error) {
    console.error("Error happened when creating User: ", error);
  }
};

const getUserByUserName = async (req, res) => {
  try {
    const { userName } = req.query;
    const user = await User.findOne({ where: { userName: userName } });

    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    console.error("Error getting user: ", error);
  }
};

module.exports = { createUser, getUserByUserName };
