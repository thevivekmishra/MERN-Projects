import express from 'express';
import { signup } from '../controller/signup.js';
import { login } from '../controller/login.js';
import { getAllUser } from '../controller/getAllUser.js';

const router = express.Router();

// Define routes
router.get("/getalluser", getAllUser);
router.post("/signup", signup);
router.post("/login", login);

export default router;
