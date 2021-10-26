const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/usersModels');

module.exports = {
  register: (req, res) => {
    const {userName, password} = req.body;
    User.find({userName}).then((users) => {
      if (users.length >= 1) {
        return res.status(409).json({
          message: 'Email exists'
        })
      }
      bcrypt.hash(password, 10, (error, hash) => {
        if (error) {
          return res.status(500).json({
            error
          })
        }
        const user = new User({
          _id: new mongoose.Types.ObjectId(),
          email,
          password: hash
        })
        user.save().then((result) => {
          console.log(result);
          res.status(200).json({
            message: 'User created'
          });
        }).catch(error => {
          res.status(500).json({
            error
          })
        });
      });
    })
  },
  login: async (req, res) => {
    try {
      const {password} = req.body
      console.log(password)
      const user = await User.find({password})
      console.log(user)
      if (user.length === 0) {
        return res.status(404).json({
          message: "this password not"
        })
      } else {
        console.log(user)
        return res.status(200).json(user)
      }
    } catch (e) {
      console.log(e)
    }

  }
}
