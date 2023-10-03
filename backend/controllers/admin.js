const asyncHandler = require('express-async-handler')
const {generateToken} = require('../utils/generateToken.js')
const Admin = require('../models/admin.js')
const bcrypt = require('bcryptjs');

const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password, nic, phone } = req.body;
    const hashedPass = await bcrypt.hash(password, 10);
    const existingUser = await Admin.findOne({ email });

    if (existingUser) {
        return res.json({
            message: 'User already exists'
        })
    }

    const admin = await Admin.create({
        name, 
        email, 
        password: hashedPass, 
        nic, 
        phone
    })

    if (admin) {
        res.status(201).json({
          _id: admin._id,
          name: admin.name,
          email: admin.email,
          isAdmin: admin.isAdmin,
          token: token,
        })
    } else {
    res.status(400)
    throw new Error('Invalid user data')
    }
})

const authUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body
  
    const user = await Admin.findOne({ email })

    if (!user) {
        return res.status(400).json({ message: 'No user found' });
    }


    if (user && (await bcrypt.compare(password, user.password))){
        // const token = generateToken(user._id);
        // localStorage.setItem('token', token);
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id),
        })

    } else {
        res.status(401)
        throw new Error('Invalid email or password')
    }
})

const getUser = asyncHandler(async (req, res) => {
    res.json({message: "data"})
})

module.exports = {
    authUser,
    registerUser,
    getUser
}