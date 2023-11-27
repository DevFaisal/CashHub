import transactions from "../models/transactions.model.js"
import { asyncHandler } from '../utils/asyncHandler.js'
import { ApiError } from '../utils/ApiError.js'
import { ApiResponse } from "../utils/ApiResponse.js"

const transection = asyncHandler(async (req, res, next) => {
  const { userId, amount, description, type, date } = req.body
  console.log(userId, amount, description, type, date)
  try {
    if (
      [userId, description, type].some((field) => {
        return field?.trim() === ""
      })
    ) {
      throw new ApiError(400, "All fields are required")
    }
    else if (amount < 0) {
      throw new ApiError(400, "Amount Should be a Positive Number")
    }

    const newTransaction = await transactions.create({
      userId,
      amount,
      description,
      type,
      date,
    })

    return res.status(200).json(new ApiResponse(200, newTransaction))
  } catch (error) {
    res.status(410).send(error.message)
  }
})

const getTransection = asyncHandler(async (req, res, next) => {
  const { userId } = req.query.userId
  console.log("Backedn userID", userId)

  if (!userId) return new ApiError(400, "Provide User ID")

  const allTransactions = await transactions.find({ userId })
    .catch((err) => {
      throw new ApiError(400, "No Transaction Found")
    })

  return res.status(200).json(new ApiResponse(200, allTransactions))

})


export { transection, getTransection }