import { Router } from 'express'
import { getEvents } from '../controllers/eventController.js'

const router = Router()

router.route('/').get(getEvents)

export default router