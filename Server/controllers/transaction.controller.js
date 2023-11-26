import transactions from "../models/transactions.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const transection = asyncHandler(async (req, res, next) => {
  const { userId, amount, description, type, date } = req.body;

  if (
    [userId, description, type, date].some((field) => {
      return field?.trim() === "";
    })
  ) {
    throw new ApiError(400, "All fields are required");
  } else if (amount < 0) {
    throw new ApiError(400, "Amount Should be a Positive Number");
  }

  const newTransaction = await transactions
    .create({
      userId,
      amount,
      description,
      type,
      date,
    })
    .then((res) => {
      console.log("Transaction Success", res);
    })
    .catch((err) => {
      throw new ApiError(401, "Error Occured", err);
    });

  return res.status(200).json(new ApiResponse(200, newTransaction));
});

const getTransection = asyncHandler(async (req, res, next) => {
  const { userId } = req.body;
  console.log(userId);

  if (!userId) return new ApiError(400, "Provide User ID");

  const allTransactions = await transactions.find({ userId }).catch((err) => {
    throw new ApiError(400, "No Transaction Found");
  });

  return res.status(200).json(new ApiResponse(200, allTransactions));
});

export { transection, getTransection };
