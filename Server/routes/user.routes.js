import { Router } from "express"
import { registerUser, loginUser, currentUser } from '../controllers/user.controller.js'
import { upload } from "../middlewares/multer.middleware.js"


const router = Router()
router.route('/register').post(upload.single('avatar'), registerUser)
router.route('/login').post(loginUser)
router.route('/current').post(currentUser)


export default router