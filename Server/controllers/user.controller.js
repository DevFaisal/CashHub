import { asyncHandler } from '../utils/asyncHandler.js'
import { ApiError } from '../utils/ApiError.js'
import User from '../models/user.model.js'
import { uploadOnCloudinary } from '../utils/cloudinary.js'
import { ApiResponse } from "../utils/ApiResponse.js"
import JWT from 'jsonwebtoken'

const registerUser = asyncHandler(async (req, res, next) => {
    const { fullName, email, password } = req.body;

    try {
        if (![fullName, email, password].every(field => field?.trim())) {
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

        const createdUser = await User.create({
            fullName,
            email,
            password,
            avatar: avatar.url
        })

        if (createdUser) {
            return res.status(200).json(
                new ApiResponse(200, createdUser, "User Created")
            )
        } else {
            throw new ApiError(500, "Internal Server Error")
        }
    } catch (error) {
        next(error)
    }
})

const loginUser = asyncHandler(async (req, res, next) => {
    const { email, password } = req.body

    try {
        if (!email || !password) {
            throw new ApiError(400, "All fields are required")
        }

        const user = await User.findOne({ email })

        if (!user) {
            throw new ApiError(410, "No User Found")
        }

        if (user.password !== password) {
            throw new ApiError(400, "Wrong Password")
        }

        const token = JWT.sign({ id: user._id }, process.env.JWT_SECRET || "secretkey", { expiresIn: "1d" })
        res.cookie("token", token, { httpOnly: true })

        return res.status(200).json(
            new ApiResponse(200, user, "User Logged in")
        )
    } catch (error) {
        next(error)
    }
})

const currentUser = asyncHandler(async (req, res, next) => {
    const { email } = req.body

    try {
        const user = await User.findOne({ email })

        if (!user) {
            throw new ApiError(404, "User not found")
        }
        return res.status(200).json(
            new ApiResponse(200, user, "User found")
        )
    } catch (error) {
        next(error)
    }
})

export { registerUser, loginUser, currentUser }