const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    firstName: {
      type: String
    },
    lastName: {
      type:String
    },
    cash: {
      type: Number,
      default: 0,
    },
    credit: {
      type: Number,
      default: 0,
      min: [0, "Credit need to be positive"],
    },
    isActive: {
      type: Boolean,
    },
  },
  { timestamps: true }
);

const User = model("User", userSchema);

module.exports = User;