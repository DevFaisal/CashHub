import { asyncHandler } from '../utils/asyncHandler.js'
import { ApiError } from '../utils/ApiError.js'
import User from '../models/user.model.js'
import { uploadOnCloudinary } from '../utils/cloudinary.js'
import { ApiResponse } from "../utils/ApiResponse.js"

const registerUser = asyncHandler(async (req, res, next) => {
    // get Userdetails from frontEnd
    // Validation - not empty
    // Check if user already exists - email
    // check from avatar
    // upload them to cloudnary, avatar
    // creat user Object -create entry in DB
    // remove password from response
    // check for user creation
    // return response

    const { fullName, email, password } = req.body;

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
    }).then((res) => {
        console.log("User Created")
    })
        .catch((err) => {
            throw new ApiError(500, "Internal Server Error")
        })


    return res.status(200).json(
        new ApiResponse(200, craetedUser, "User Created")
    )

})

const loginUser = asyncHandler(async (req, res, next) => {
    const { email, password } = req.body
    const user = req.body
    res.status(200).json(new ApiResponse(200, user, "User found"))
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