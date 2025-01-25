import express, { NextFunction, Request, Response } from 'express'
import watchtimeRoute from './routes/watchtimeRoute'
import tokens from '../tokens.json'

const PORT = process.env.PORT || 3001

type TokenKeys = keyof typeof tokens

const checkTokenMiddleware = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const token = req.query.token as string
    if (!token) {
        res.status(400).json({ error: 'Missing token query parameter' })
        return
    }

    const channelId = req.query.channelId as string
    if (!channelId) {
        res.status(400).json({ error: 'Missing channelId query parameter' })
        return
    }

    if (!tokens.hasOwnProperty(token)) {
        res.status(401).json({ error: 'Token not found' })
        return
    }

    req.jwtToken = tokens[token as TokenKeys]
    req.channelId = channelId

    next()
}

const application = express()
application.use(checkTokenMiddleware)
application.use(watchtimeRoute)

application.listen(PORT, () => {
    console.log(
        'streamelements-modejs-server started successfully and is listening on Port',
        PORT
    )
})
