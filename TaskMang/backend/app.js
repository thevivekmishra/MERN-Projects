import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user-route.js';
import cors from 'cors';


dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/v1/user', userRoutes);

app.get("/", (req, res) => {
    res.send("HELLO");
});

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Database connected successfully!!!');
}).catch((error) => {
    console.log('Error connecting to MongoDB:', error.message);
});

app.listen(PORT, () => {
    console.log(`App is running on port no ${PORT}`);
});
