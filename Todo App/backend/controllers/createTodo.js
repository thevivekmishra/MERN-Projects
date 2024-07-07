//import the model
const Todo = require("../models/todo")

//define route handler
exports.createTodo = async(req,res) => {
    try{
        //extract title and description from request body
        const {title,description}=req.body
        //create a new todo obj and insert in db 
        const response = await Todo.create( {title,description} )
        //send a json response with success flag
        res.status(200).json(
        {
            success:true,
            data:response,
            message:"entry created successfully"
        })
    }
    catch(err){
        console.error(err),
       
        res.status(500).json({
            success:false,
            data:"internal server error",
            message:err.message
        })
    }
}