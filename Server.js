const express = require('express');
const connectDB = require('./config/db');
const dotenv = require('dotenv');
const orderRoutes = require('./routes/orderRoutes')
const adminRoutes = require('./routes/adminRoutes')
const ticketRoutes = require('./routes/ticketRoutes')

const app = express();
app.use(express.json());
dotenv.config()

connectDB();


app.get('/', (req,res) => {
    res.send('hello world')
})

app.use('/api/orders', orderRoutes)
app.use('/api/admin', adminRoutes)
app.use('/api/tickets', ticketRoutes)

app.listen(5000, () => {
    console.log('server started on port 5000')
})