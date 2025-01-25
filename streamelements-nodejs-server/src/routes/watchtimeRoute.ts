import express from 'express'
import { requireQueryParameters } from '../utils/requireQueryParameters'
import { getWatchtimeHandler } from '../controllers/watchtimeController'
const router = express.Router()

router.use(requireQueryParameters(['username']))

router.get('/watchtime', getWatchtimeHandler)

export default router
