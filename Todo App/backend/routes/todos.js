const express = require("express");
const router = express.Router();

//import controller
const {createTodo} = require("../controllers/createTodo");
const {getTodo,getTodoById} = require("../controllers/getTodo");
const {updateTodo} = require("../controllers/updateTodo");
const {deleteTodo} = require("../controllers/deleteTodo");


//define API 

//create
router.post("/createTodo",createTodo);

//view
router.get("/getTodo",getTodo);
router.get("/getTodo/:id",getTodoById);

//update
router.put("/updateTodo/:id",updateTodo);

//delete 
router.delete("/deleteTodo/:id",deleteTodo);
module.exports = router;