import 'express'

declare global {
    namespace Express {
        interface Request {
            jwtToken: string
            channelId: string
        }
    }
}
