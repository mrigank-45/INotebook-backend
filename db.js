const mongoose = require('mongoose');
// const mongoURI = "mongodb://localhost:27017"
require("dotenv").config();


const connectToMongo = () => {
    // mongoose.connect(mongoURI, () => {
    //     console.log("Connected to Mongo Successfully");
    // })
    mongoose.connect(process.env.DB_URL, { useNewUrlParser: true });
}
module.exports = connectToMongo;
