const express = require("express");
const app = express();
const users = require("./routes/auth");
const cors = require("cors");

app.use(express.json());
app.use(cors());
app.use("/users", users);

let port = process.env.PORT || "3004";
app.listen(port);
