import { Router } from 'express'
import { getMembers } from '../controllers/memberController.js'

const router = Router()

router.route('/').get(getMembers)

export default router