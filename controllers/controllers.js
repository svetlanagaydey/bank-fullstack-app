const User = require("../models/user.model");
const { validateObjectId, validateNumber } = require("./utils");

const addUser = async (req, res) => {
  try {
    const { passport, firstName, lastName, birthDay, cash, credit } = req.body;
    const user = new User({ passport: passport, firstName: firstName, lastName:lastName, birthDay: birthDay, cash: cash, credit: credit, isActive: true });
    await user.save();
    res.status(200).send({ message: "Added Successfully" });
  } catch (error) {
    res.status(501).send({ error: error.message });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const allUsers = await User.find();
    res.status(200).send({ users: allUsers });
  } catch (error) {
    res.status(404).send({ error: error.message });
  }
};

const getUser = async (req, res) => {
  try {
    const id = req.params.id;
    validateObjectId(id);
    const user = await User.findById(id);
    if (!user) {
      throw new Error(`User ${id} does not exist`);
    }
    res.status(200).send({ user: user });
  } catch (error) {
    res.status(404).send({ error: error.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    validateObjectId(id);
    const { deletedCount } = await User.deleteOne({ _id: id });
    if (deletedCount === 0) throw new Error(`User ${id} does not exist`);
    res.status(200).send({ message: `User ${id} deleted` });
  } catch (error) {
    res.status(404).send({ error: error.message });
  }
};

const deposit = async (req, res) => {
  try {
    const id = req.params.id;
    const amount = req.body.amount;
    const user = await User.findById(id);
    user.cash += amount;
    await user.save();
    res.status(200).send({ message: `Added ${amount} to ${user._id}` });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

const withdraw = async (req, res) => {
  try {
    const id = req.params.id;
    const amount = req.body.amount;
    const user = await User.findById(id);
    userTotal = user.cash + user.credit;
    if (amount > userTotal) {
      // console.log("not enough money");
      throw new Error("Not enough money to withdraw");
    }
    user.cash -= amount;
    await user.save();
    res.status(200).send({ message: `withdraw ${amount}` });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

const updateCredit = async (req, res) => {
  const id = req.params.id;
  const creditAmount = req.body.amount;
  try {
    validateObjectId(id);
    validateNumber(creditAmount);
    const user = await User.findById(id);
    user.credit = creditAmount;
    const updatedUser = await user.save();
    res.status(200).send({ message: `User Credit is now ${updatedUser.credit}` });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

module.exports = { getAllUsers, getUser, addUser, deposit, deleteUser, withdraw, updateCredit };