import mongoose, { Schema, model } from "mongoose";

const userSchema = new Schema({
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowecase: true
    },
    password: {
        type: String,
        required: true
    },
    avatar: {
        type: String,
        required: true
    }
}, { timestamps: true })

const User = mongoose.model('User', userSchema)


export default User