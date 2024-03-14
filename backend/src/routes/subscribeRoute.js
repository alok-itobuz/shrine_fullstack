import { Router } from 'express'
import { postSubscriber } from '../controllers/subscribeController.js';

const router = Router()

router.route('/').post(postSubscriber);

export default router;
