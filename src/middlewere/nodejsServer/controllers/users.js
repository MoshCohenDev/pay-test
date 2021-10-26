const {users} = require("./utils");
const {validUser, foodModel} = require("../models/usersModels");

module.exports = {
  login: async (req, res) => {
    let userLogin = req.body;
    users.forEach((user) => {
      if (user.email === userLogin.email) {
        return res.status(200).json(user);
      }
    });
    return res.status(401).json({
      msg: 'dfsdfsdsdf'
    })
  },
  register: async (req, res) => {
    let validBody = validUser(req.body);
    console.log(validBody)

  },
};
