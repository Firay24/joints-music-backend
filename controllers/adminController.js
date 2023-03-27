const asyncHandler = require('express-async-handler')
const Admin = require('../models/adminModel')
const generateToken = require('../utils/generateToken')

const addAdmin = asyncHandler(async (req, res) => {
    const { username, password } = req.body

    const admin = await Admin.create({
        username, 
        password
    })

    if(admin) {
        res.status(201).json(admin)
    } else {
        res.status(400)
        throw new Error("cannot add admin account")
    }
})

const loginAdmin  = asyncHandler(async (req, res) => {
    const { username, password } = req.body
    const admin = await Admin.findOne({ username })

    if (addAdmin && (await admin.matchPassword(password))) {
        res.json({
            _id: admin._id,
            username: admin.username,
            token: generateToken(admin._id)
        })
    } else {
        res.json({
            message: 'invalid email or password'
        }).status(401)
        throw new Error('invalid email or password')
    }
})

module.exports = {
    addAdmin,
    loginAdmin
}