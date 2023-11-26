import { Router } from "express";
import { transection, getTransection } from '../controllers/transaction.controller.js'

const router = Router()

router.route('/transaction').post(transection)
router.route('/gettransactions').get(getTransection)

export default router 