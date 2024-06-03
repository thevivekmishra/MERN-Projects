import mongoose from "mongoose";
import validator from "validator";

const reservationSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        minLength:[3,"First name must contain atleast 3 character"],
        maxLength:[30,"First name cannot exceed 30 character"]
    },
    lastName:{
        type:String,
        required:true,
        minLength:[3,"last name must contain atleast 3 character"],
        maxLength:[30,"last name cannot exceed 30 character"]
    },
    email:{
        type:String,
        required:true,
        validate:[validator.isEmail,"Provide a valid email"]
    },
    phone:{
        type:Number,
        require:true,
        minLength:[10,"Mobile number must contain 10 digits"],
        maxLength:[12,"Mobile number cannot exceed 12 digits"]
    },
    time:{
        type:String,
        required:true,
    },
    date:{
        type:String,
        required:true,
    }
})

export const Reservation = mongoose.model("Reservation",reservationSchema);