const Todo = require("../models/todo")

exports.updateTodo = async (req, res) => {
    try {
        //2nd method to fetch id 
        const { id } = req.params;
        const { title, description } = req.body;

        const todo = await Todo.findByIdAndUpdate(
            { _id: id },
            { title, description, updatedAt: Date.now() }
        )

        res.status(200).json({
            success: true,
            data: todo,
            message: `updated successfully`,
        })

    }
    catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            error: err.message,
            message: "updation failed"
        })

    }
}
