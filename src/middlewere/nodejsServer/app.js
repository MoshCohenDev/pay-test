const express = require("express");
const app = express();
const mongoose = require("mongoose");

const users = require("./routes/auth");
const cors = require("cors");
mongoose
  .connect(
    `mongodb+srv://moshe:q1w2e3r4@youtube-roject.sh9ax.mongodb.net/pay-test?retryWrites=true&w=majority`
  )
  .then((res) => {
    console.log("db connected");
  })
  .catch((error) => {
    console.log(error);
  });
app.use(express.json());
app.use(cors());
app.use("/users", users);

let port = process.env.PORT || "3004";
app.listen(port);
