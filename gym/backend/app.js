import express from "express";
import { config } from "dotenv";
import cors from "cors";
import { sendEmail } from "./utils/sendEmail.js";

const app = express();
const router = express.Router();

config({ path: "./config.env" });

// Middleware
app.use(cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["POST"],
    credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
router.post("/send/mail", async (req, res, next) => {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
        return res.status(400).json({
            success: false,
            message: "Please provide all details",
        });
    }
    try {
        await sendEmail({
            email: "mishravivek9569@gmail.com",
            subject: "Gym website contact",
            message,
            userEmail: email,
        });
        res.status(200).json({
            success: true,
            message: "Message sent successfully",
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal server error, please try again",
        });
    }
});

// Use router
app.use(router);

// Start server
app.listen(process.env.PORT, () => {
    console.log(`App is running on port no ${process.env.PORT}`);
});
