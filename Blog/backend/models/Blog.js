import mongoose from "mongoose";
import User from "./User.js";  // Added .js extension

const Schema = mongoose.Schema;

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    user: {
        type: mongoose.Types.ObjectId,
        ref: "User",
        required: true,
    }
}, { timestamps: true }); // Add timestamps option

export default mongoose.model("Blog", blogSchema);
