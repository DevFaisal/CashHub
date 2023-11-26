import mongoose from "mongoose";
import { DB_NAME } from "../src/constants.js";


const connectDB = async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`MongoDB Connected !! DB Host:`)
    } catch (error) {
        console.log("MongoDB connection error", error)
        process.exit(1)
    }
}

export default connectDB