const express = require("express");
const mongoose = require("mongoose");
const connectWithDb = require("./config/database");
const cors = require("cors");

const app = express();

require("dotenv").config();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000 

connectWithDb();


// Import routes from todo api
const todoRoutes = require("./routes/todos");
// Mount the todo api
app.use("/api/v1", todoRoutes);

app.listen(PORT,()=>{
    console.log(`App is running on the port no ${PORT}`)
})

//default route
app.get("/",(req,res)=> {
    res.send("<h1>Hello</h1>")
})