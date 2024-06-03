import mongoose from "mongoose";

export const dbConnect = () => {
    mongoose.connect(process.env.MONGODB_URL,{
      useNewUrlParser:true
    })

    .then(()=>console.log("Database connected successfully!!"))
    .catch((error)=>{
        console.log("OOPS!! Database Connection failed");
        console.error(error.message)
    })
}
