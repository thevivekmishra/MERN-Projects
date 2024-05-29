import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import bookRoute from './routes/book.route.js';
import userRoute from './routes/user.route.js';

const app = express();
app.use(cors());
app.use(express.json());

dotenv.config();
const PORT = process.env.PORT || 3000;

const URL = process.env.DATABASE_URL;
try {
    mongoose.connect(URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log("Connected to database");
} catch (error) {
    console.error("Database connection error:", error);
}

app.use("/book", bookRoute);
app.use("/user",userRoute);

app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`);
});
