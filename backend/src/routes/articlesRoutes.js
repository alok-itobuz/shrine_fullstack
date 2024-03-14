import { Router } from 'express'
import { getArticles } from '../controllers/articleController.js'
const router = Router()

router.route('/').get(getArticles)

export default router