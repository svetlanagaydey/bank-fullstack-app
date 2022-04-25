const express = require("express");
const userRouter = express.Router();
const {
  getAllUsers,
  appendUsers,
  getUser,
  addUser,
  deposit,
  withdraw,
  update,
  deleteUser,
  getByPassport,
} = require("../controllers/controllers");

userRouter.get("/users/:appendLength", getAllUsers);

userRouter.get("/users/:appendLength/:currentPage", appendUsers);

userRouter.get("/user/:id", getUser);

userRouter.post("/", addUser);

userRouter.put("/deposit/:id", deposit);

userRouter.put("/withdraw/:id", withdraw);

userRouter.put("/update/:id",  update);

userRouter.delete("/:id", deleteUser);

userRouter.get("/transfer/:passport", getByPassport);

module.exports = userRouter;