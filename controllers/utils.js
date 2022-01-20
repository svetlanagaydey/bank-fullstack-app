const ObjectId = require("mongoose").Types.ObjectId;

const validateObjectId = (id) => {
  if (!ObjectId.isValid(id)) {
    const error = new Error("Invalid ID");
    error.code = 404;
    throw error;
  }
};

const validateNumber = (number) => {
  if (!Number.isInteger(number)) {
    throw new Error("Invalid amount");
  }
};

module.exports = { validateObjectId, validateNumber };