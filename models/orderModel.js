const mongoose = require('mongoose');
const bcrypt = require("bcryptjs");

const orderSchema = mongoose.Schema({
    email: {
        type: String,
        unique: true,
        require: true,
    }, 
    password: {
        type: String,
        require: true,
    },
    regisNumber: {
        type: String,
        default:"null",
    },
    typeTicket: {
        type: String,
        require: true,
    },
    status: {
        type: Number,
        default: 0,
    },
    token: {
        type: String,
        default: " ",
    },
});

orderSchema.pre('save', async function (next) {
    if(!this.isModified('password')) {
        next()
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});

orderSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password)
};

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;