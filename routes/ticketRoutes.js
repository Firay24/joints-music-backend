const express = require('express')
const router = express.Router()
const { addTicket, updateCountTicket, getTickets } = require("../controllers/ticketController")

router.route("/addTicket").post(addTicket)
router.route("/updateCount/:id").put(updateCountTicket)
router.route("/getTickets").get(getTickets)

module.exports = router