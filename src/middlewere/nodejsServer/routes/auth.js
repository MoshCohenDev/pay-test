const express = require('express');
const router = express.Router();
const {
  register,
  getAllUsers,
  login,
} = require('../controllers/users')

router.post('/register', register)
router.get('/data', getAllUsers)
router.post('/login', login)

module.exports = router
