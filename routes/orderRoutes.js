const express = require('express')
const router = express.Router()
const { 
    addOrder, 
    getOrderById, 
    deleteOrder, 
    getAllOrder, 
    updateStatus,
    loginUser
} = require('../controllers/orderController')
const { adminProtect, userProtect } = require('../middleware/authMiddleware')

router.route("/addOrder").post(addOrder)
router.route("/getOrder/:id").get(getOrderById)
router.route("getOrderAuth/:id").get(userProtect, getOrderById)
router.route("/getAllOrders").get(adminProtect, getAllOrder)
router.route("/deleteOrder/:id").delete(deleteOrder)
router.route("/updateStatus/:id").put(updateStatus)
router.route("/loginUser").post(loginUser)

module.exports = router;