const asyncHandler = require('express-async-handler')
const Order = require('../models/orderModel')
const generateToken = require('../utils/generateToken')

const addOrder = asyncHandler(async (req, res) => {
    const { email, password, typeTicket } = req.body;
    const regisNumber = Math.floor(1000000000 + Math.random() * 90000)

    const order = await Order.create({
        email,
        password,
        typeTicket,
        regisNumber,
    })

    if(order) {
        res.status(201).json(order)
    } else {
        res.status(400)
        throw new Error('cannot add order')
    }
})

const getOrderById = asyncHandler(async (req, res) => {
    const orderID = req.params.id;
    const order = await Order.findById(orderID);

    if(order) {
        res.status(201).json(order)
    } else {
        res.status(400)
        throw new Error('not found')
    }
})

const getAllOrder = asyncHandler(async (req,res) => {
    const orders = await Order.find({})

    if(orders) {
        res.status(201).json(orders)
    } else {
        res.status(400)
        throw new Error('cannot get all orders')
    }
})

const updateStatus = asyncHandler(async (req,res) => {
    const orderID = req.params.id;
    const { status } = req.body
    const order = await Order.findById(orderID)

    order.status = status

    await order.save()
    console.log(await order.save())
    res.json(order)
})

const deleteOrder = asyncHandler(async (req,res) => {
    const orderID = req.params.id
    const order = await Order.deleteOne({ _id: orderID })

    if(order) {
        res.status(201).json(order)
    } else {
        res.status(400)
        throw new Error('delete failed')
    }
})

const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body
    const user = await Order.findOne({ email })

    if (user && (await user.matchPassword(password))) {
        res.json({
            _id: user._id,
            email: user.email,
            token: generateToken(user._id)
        })
    } else {
        res.json({
            message: 'invalid email or password'
        }).status(401)
        throw new Error('invalid email or password')
    }
})

module.exports = {
    addOrder,
    getOrderById,
    getAllOrder,
    deleteOrder,
    updateStatus,
    loginUser
}