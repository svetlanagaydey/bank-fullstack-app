const express = require("express");
const userRouter = express.Router();
const {
  getAllUsers,
  appendUsers,
  addUser,
  getUser,
  deposit,
  deleteUser,
  withdraw,
  updateCredit,
} = require("../controllers/controllers");

userRouter.get("/:appendLength", getAllUsers);
userRouter.get("/:appendLength/:currentPage", appendUsers);

userRouter.get("/:id", getUser);

userRouter.post("/", addUser);

userRouter.put("/deposit/:id", deposit);

userRouter.put("/withdraw/:id", withdraw);

userRouter.put("/updatecredit/:id", updateCredit);

userRouter.delete("/:id", deleteUser);

module.exports = userRouter;