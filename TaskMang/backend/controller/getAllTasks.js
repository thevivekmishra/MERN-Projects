import Task from '../model/task-model.js';
import User from '../model/user-model.js';

export const getAllTasks = async (req, res, next) => {
    try {
        // Fetch all tasks from the database
        const tasks = await Task.find();

        // Check if tasks were found
        if (!tasks.length) {
            return res.status(404).json({ message: "No tasks found" });
        }

        // Send tasks in response
        res.status(200).json({
            message: "Tasks retrieved successfully",
            tasks
        });
    } catch (error) {
        console.error("Failed to retrieve tasks", error);
        res.status(500).json({
            message: "Internal server error"
        });
    }
};
