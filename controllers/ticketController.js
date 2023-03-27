const asyncHandler = require('express-async-handler')
const Ticket = require("../models/ticketsModel")

const addTicket = asyncHandler(async (req, res) => {
    const { name, countTicket } = req.body

    const ticket = await Ticket.create({
        name,
        countTicket,
    })

    if(ticket) {
        res.status(201).json(ticket)
    } else {
        res.status(400)
        throw new Error('invalid ticket data')
    }
})

const getTickets = asyncHandler(async (req, res) => {
    const tickets = await Ticket.find({})

    if(tickets) {
        res.status(201).json(tickets)
    } else {
        res.status(400)
        throw new Error('cannot get tickets')
    }
})

const updateCountTicket = asyncHandler (async (req, res) =>{
    const ticketID = req.params.id
    const { countTicket } = req.body
    const ticket = await Ticket.findById(ticketID)

    ticket.countTicket = countTicket

    if(await ticket.save()) {
        res.status(201).json(ticket)
    } else {
        res.status(400)
        throw new Error('cannot get tickets')
    }
})

module.exports = {
    addTicket,
    updateCountTicket,
    getTickets
}