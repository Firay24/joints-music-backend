const express = require('express');
const connectDB = require('./config/db');
const dotenv = require('dotenv');

const app = express();
app.use(express.json());
dotenv.config()

connectDB();


app.get('/', (req,res) => {
    res.send('hello world')
})

app.listen(5000, () => {
    console.log('server started on port 5000')
})