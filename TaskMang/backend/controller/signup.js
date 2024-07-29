import User from "../model/user-model.js";
import bcrypt from "bcryptjs";

export const signup = async (req, res, next) => {
    const { name, email, password } = req.body;

    try {
        // Check if the user already exists
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({ 
                message: "User already exists" 
            });
        }
        
        // Hash the password
        const hashedPassword = bcrypt.hashSync(password, 10);

        // Create a new user instance
        const newUser = new User({ 
            name, 
            email, 
            password: hashedPassword,
            // Task: [],
        });

        // Save the new user to the database
        await newUser.save();
        console.log('User saved successfully:', newUser);
        return res.status(201).json({ user: newUser });
    } 
    catch (error) {
        console.error('Error saving user:', error);
        return res.status(500).json({ message: 'Failed to save user' });
    }
};
