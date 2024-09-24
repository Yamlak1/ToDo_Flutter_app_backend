// const { User } = require("../models/UserModel");

// const createUser = async (req, res) => {
//   try {
//     const { fullName, userName, email, phone, password } = req.body;
//     const userData = {
//       fullName: fullName,
//       userName: userName,
//       email: email,
//       phone: phone,
//       password: password,
//     };

//     const user = await User.create(userData);
//     res.status(201).json(user);
//   } catch (error) {
//     console.error("Error happened when creating User: ", error);
//   }
// };

// const getUserByUserName = async (req, res) => {
//   try {
//     const { userName } = req.query;
//     const user = await User.findOne({ where: { userName: userName } });

//     if (user) {
//       res.status(200).json(user);
//     } else {
//       res.status(404).json({ error: "User not found" });
//     }
//   } catch (error) {
//     console.error("Error getting user: ", error);
//   }
// };

// module.exports = { createUser, getUserByUserName };

const { db } = require("../config/firebase");
const {
  collection,
  addDoc,
  getDocs,
  query,
  where,
} = require("firebase/firestore");

// Create a new user
const createUser = async (req, res) => {
  try {
    const { fullName, userName, email, phone, password } = req.body;
    const userData = { fullName, userName, email, phone, password };

    const docRef = await addDoc(collection(db, "users"), userData);
    res.status(201).json({ id: docRef.id, ...userData });
  } catch (error) {
    console.error("Error creating user: ", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Get user by username
const getUserByUserName = async (req, res) => {
  try {
    const { userName } = req.query;
    const q = query(collection(db, "users"), where("userName", "==", userName));
    const querySnapshot = await getDocs(q);

    const users = [];
    querySnapshot.forEach((doc) => {
      users.push({ id: doc.id, ...doc.data() });
    });

    if (users.length > 0) {
      res.status(200).json(users[0]);
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    console.error("Error getting user: ", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { createUser, getUserByUserName };
