import { BaseRequest } from '../types/BaseRequest'
import { Response } from 'express'
import { StreamElementsAPI } from '@janhck/api-lib'

export const getWatchtimeHandler = (
    req: BaseRequest<{ username: string }>,
    res: Response
) => {
    const { channelId, token, username } = req.query
    const streamElementsAPI = new StreamElementsAPI(channelId, token)
    streamElementsAPI.points
        .fetchUserWatchtime(username)
        .then((user) => {
            if (!user) {
                res.sendStatus(404)
                return
            }

            res.send(`Du schaust den Stream bereits seit ${user.minutes} Minuten.`)
        })
        .catch(() => {
            res.sendStatus(500)
        })
}
