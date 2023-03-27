const express = require('express')
const router = express.Router()
const {
    loginAdmin,
    addAdmin
} = require('../controllers/adminController')

router.route("/loginAdmin").post(loginAdmin)
router.route("/addAdmin").post(addAdmin)

module.exports = router