import { asyncHandler } from '../utils/asyncHandler.js'
import { ApiError } from '../utils/ApiError.js'
import User from '../models/user.model.js'
import { uploadOnCloudinary } from '../utils/cloudinary.js'
import { ApiResponse } from "../utils/ApiResponse.js"

const registerUser = asyncHandler(async (req, res, next) => {

    const { fullName, email, password } = req.body;

    try {
        if (
            [fullName, email, password].some((field) => {
                return field?.trim() === ""
            })
        ) {
            throw new ApiError(400, "All fields are required")
        }

        const existedUser = await User.findOne({ email })

        if (existedUser) {
            throw new ApiError(409, "User already exists")
        }

        const avatarLocalpath = req.file?.path

        if (!avatarLocalpath) {
            throw new ApiError(400, "Upload your Profile")
        }

        const avatar = await uploadOnCloudinary(avatarLocalpath)

        const craetedUser = await User.create({
            fullName,
            email,
            password,
            avatar: avatar.url
        })
        if (craetedUser) {

            return res.status(200).json(
                new ApiResponse(200, craetedUser, "User Created")
            )
        }
        else {
            throw new ApiError(500, "Internal Server Error")
        }

    } catch (error) {
        res.status(error.statusCode).send(error.message)
    }
})

const loginUser = asyncHandler(async (req, res, next) => {
    //Check all fields are required
    //Then search in the Database for the specific usee with his email
    //Then return the body excluding password

    const { email, password } = req.body
    try {
        if (!email || !password) throw new ApiError(400, "All fields are required")

        const user = await User.findOne({ email })
        if (user) {
            res.status(200).json(new ApiResponse(200, user, "User found"))
        }
        else {
            throw new ApiError(410, "No User Found")
        }
    }
    catch (err) {
        res.status(error.statusCode).send(error.message)
    }

})

const currentUser = asyncHandler(async (req, res, next) => {

    const { email } = req.body
    const user = await User.findOne({ email })

    if (!user) {
        throw new ApiError(404, "User not found")
    }

    return res.status(200).json(
        new ApiResponse(200, user, "User found")
    )
})

export { registerUser, loginUser, currentUser }