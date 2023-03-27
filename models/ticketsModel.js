const mongoose = require('mongoose')

const ticketSchema = mongoose.Schema({
    name: {
        type: String,
        require: true,
        unique: true,
    },
    countTicket: {
        type: Number,
        require: true,
    }
})

const Ticket = mongoose.model('Ticket', ticketSchema)

module.exports = Ticket