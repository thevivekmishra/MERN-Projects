const mongoose = require("mongoose")

require('dotenv').config();

const connectWithDb = () => {
    mongoose.connect(process.env.MONGODB_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    .then(()=>console.log("Database connected successfully!!"))
    .catch((error) => {
        console.log(error);
        console.log("Databse connection failed")
        process.exit(1);
    })
}

module.exports = connectWithDb;