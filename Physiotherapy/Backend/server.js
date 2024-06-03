import express from "express"
import dotenv from 'dotenv'
import cors from 'cors'
import {dbConnect} from './config/database.js'
import { errorMiddleware } from "./error/error.js"
import reservationRouter from './routes/reservationRoute.js'

dotenv.config()
const PORT = process.env.PORT || 5000

const app = express();

//middleware
app.use(express.json());
app.use(cors());
app.use(errorMiddleware);
app.use('/api/v1/reservation',reservationRouter)

dbConnect();

app.get("/",(req,res)=>{
    res.send("Hello vivek")
})

app.listen(PORT,()=>{
    console.log(`App is running on port no ${PORT}`)
})