const connectToMongo = require('./db');
const express = require('express')
var cors = require('cors')
require("dotenv").config();

connectToMongo();
const app = express()

app.use(cors())
app.use(express.json())

//Available routes
app.use('/api/auth',require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))

app.listen(process.env.PORT || 7700, () => {
    console.log(`You are connected!!`);
})
