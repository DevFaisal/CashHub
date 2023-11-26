import mongoose, { Schema, model } from "mongoose";

const transactionSchema = new Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    amount: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    type: {
        type: String, //either Income or Expense
        enum: ['income', 'expense'],
    },
    date: {
        type: Date,
        default: Date.now,
    },

}, { timestamps: true })

const transactions = mongoose.model('Transactions', transactionSchema)

export default transactions