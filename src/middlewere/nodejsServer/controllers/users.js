const User = require('../models/usersModels');

module.exports = {
  register: async (req, res) => {
    try {
      const {userName, firstName, lastName, password, id} = req.body
      let user = await User.findOne({userName})
      if (user) {
        return res.status(401).json({
          msg: 'user exists'
        })
      } else {
        user = new User({userName, firstName, lastName, password, id})
        await user.save()
        return res.status(200).json({
          msg: 'user created'
        })
      }
    } catch (e) {
      res.status(400).json({
        msg: e
      })
    }
  },
  login: async (req, res) => {
    try {
      const {userName, password} = req.body
      let user = await User.findOne({userName})
      console.log(user)
      if (user.password === password) {
        return res.status(200).json(user)
      } else {
        return res.status(401).json({
          msg: 'user not found'
        })
      }
    } catch (e) {
      return res.status(400).json({
        msg: e
      })
    }
  },
  getAllUsers: async (req, res) => {
    const users = await User.find()
    return res.status(200).json(users)
  }
}
