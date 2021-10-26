const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://moshe:q1w2e3r4@youtube-roject.sh9ax.mongodb.net/express0?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "conection errror"));
db.once("open", function () {
  console.log("mongoose connected");
});
module.exports = db;
