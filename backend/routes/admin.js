const express = require('express')
const router = express.Router()
const { authUser, registerUser, getUser } = require('../controllers/admin')
const { protect } = require('../middleware/authMiddleware')

router.post('/login', authUser)
router.post('/register', registerUser)
router.get('/me', protect, getUser)

module.exports = router