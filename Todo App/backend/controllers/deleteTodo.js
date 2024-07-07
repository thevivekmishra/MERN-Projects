//impoet the model
const Todo = require("../models/todo")

exports.deleteTodo = async (req, res) => {
    try {
        const {id} = req.params;
        const todo = await Todo.findByIdAndDelete(id);
        res.status(200).json({
            success:true,
            message:`Todo Entity deleted `
        })
    }
    catch (err) {
        console.log(err)
        res.status(500).json({
            success: false,
            error: err.message,
            message: "deletion failed"
        })
    }
}