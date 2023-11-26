import connectDB from "../db/index.js";
import cors from 'cors'
import cookiesParser from "cookie-parser"
import { app } from "./app.js"
import 'dotenv/config'
const PORT = process.env.PORT

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
}))

connectDB()
    .then((res) => {
        app.listen(PORT, () => {
            console.log("Server is Running at PORT", 8000)
        })
    })
    .catch((error) => {
        console.log("MongoDB Connection Failed", error)
    })
