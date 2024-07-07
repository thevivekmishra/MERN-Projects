//impoet the model
const Todo = require("../models/todo")

//define route handler
exports.getTodo = async (req, res) => {
    try {
        //fetch all todos from database 
        const todos = await Todo.find({});
        //response
        res.status(200).json({
            success: true,
            data: todos,
            message: "entire data is fetched "
        })
    }
    catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            error: err.message,
            message: "server error"
        })

    }
}

//getTodoById 
exports.getTodoById = async (req,res) => {
    try {
        //fetching the id 
        const id = req.params.id;
        const todo = await Todo.findById({ _id: id });

        //if todo id id not found 
        if (!todo) {
            return res.status(404).json({
                success: false,
                message: "no data found with given id "
            })
        }
        //if found
        return res.status(200).json({
            success: true,
            message: ` todo id: ${id} successfullly fetched `,
            data:todo
        })
    }
    catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "error occured"
        })
    }
}