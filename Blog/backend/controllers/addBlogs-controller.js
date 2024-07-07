import mongoose from "mongoose";
import Blog from "../models/Blog.js";
import User from "../models/user.js"; // Ensure correct case

export const addBlogs = async (req, res, next) => {
    const { title, description, image, user } = req.body;

    // Basic validation
    if (!title || !description || !image || !user) {
        return res.status(400).json({ message: "All fields are required" });
    }

    let existingUser;
    try {
        existingUser = await User.findById(user);
    } catch (error) {
        console.error("Error finding user by ID:", error);
        return res.status(500).json({ message: "Error finding user by ID" });
    }

    if (!existingUser) {
        return res.status(400).json({ message: "Unable to find user by ID" });
    }

    const blog = new Blog({
        title,
        description,
        image,
        user,
    });

    try {
        const session = await mongoose.startSession();
        session.startTransaction();
        await blog.save({ session });
        existingUser.blogs.push(blog); // Correctly push the blog reference
        await existingUser.save({ session });
        await session.commitTransaction();
        session.endSession(); // End the session after committing the transaction
        return res.status(201).json({ blog });
    } catch (error) {
        console.error("Error saving blog:", error);
        return res.status(500).json({ message: "Failed to save blog" });
    }
};
