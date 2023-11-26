import express from "express";
import cors from 'cors'
import cookiesParser from "cookie-parser"

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN
}))

app.use(express.json({ limit: "16kb" }))
app.use(express.urlencoded({ extended: true, limit: "16kb" }))
app.use(express.static("public"))
app.use(cookiesParser())


//routes import

import userRouter from '../routes/user.routes.js'
import transactionRouter from '../routes/transaction.router.js'


//routes decleration
app.use("/api/v1/user", userRouter)
app.use("/user", transactionRouter)

export { app }