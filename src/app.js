// const express = require("express");
// const cors = require("cors");
// const { sequelize } = require("./config/db");
// const userRoutes = require("./routes/UserRoute");
// const toDoRoutes = require("./routes/ToDoRoute");
// const { User } = require("./models/UserModel");
// const { ToDo } = require("./models/TodoModel");

// const app = express();
// const PORT = process.env.PORT || 3000;

// app.use(cors());
// app.use(express.json());

// sequelize
//   .authenticate()
//   .then(() => console.log("Database connected"))
//   .catch((err) => console.log("Error: ", err));

// app.use("/user", userRoutes);
// app.use("/todo", toDoRoutes);

// User.hasMany(ToDo, { foreignKey: "userId" });
// ///ToDo.belongsTo(User, { foreignKey: "userId" });

// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });

const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/UserRoute");
const toDoRoutes = require("./routes/ToDoRoute");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use("/user", userRoutes);
app.use("/todo", toDoRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
