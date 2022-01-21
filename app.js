const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRouter = require("./routes/users.routes.js");
const path = require("path");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 8080;

const publicPath = path.join(__dirname, "client/build");

app.use(cors());
app.use(express.json());
app.use(express.static(publicPath));

const connectionURI = process.env.MONGODB_CONNECTION_URI;

mongoose
  .connect(connectionURI)
  .then(() => console.log("Database connected"))
  .catch((err) => console.error(err));

//app.use("/bank/clients", userRouter);
app.use("/api/users", userRouter);

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});

app.listen(port, () => {
  console.log("Server is listening on port " + port);
});