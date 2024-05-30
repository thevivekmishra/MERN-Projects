import mongoose from "mongoose";

const DBConnection = async () => {
    const MONGODB_URI = `mongodb://127.0.0.1:27017/imageUpload`;
    try {
        await mongoose.connect(MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Database connected successfully");
    } catch (error) {
        console.error("Error while connecting to db", error.message);
    }
};
export default DBConnection;
