import ErrorHandler from "../error/error.js";
import { Reservation } from "../models/reservationModel.js";

export const sendReservation = async (req, res, next) => {
    // Fetch data from req.body
    const { firstName, lastName, email, date, time } = req.body;

    // Check if all required fields are provided
    if (!firstName || !lastName || !email || !date || !time) {
        return next(new ErrorHandler("Please provide all required fields", 400));
    }

    // Create a reservation
    try {
        await Reservation.create({ firstName, lastName, email, date, time });
        res.status(200).json({
            success: true,
            message: "Reservation sent successfully",
        });
    } catch (error) {
        if (error.name === "ValidationError") {
            const validationErrors = Object.values(error.errors).map((err) => err.message);
            return next(new ErrorHandler(validationErrors.join(", "), 400));
        }
        return next(error);
    }
};
