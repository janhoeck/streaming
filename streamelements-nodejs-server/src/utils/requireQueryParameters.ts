import { NextFunction, Request, Response } from 'express'

export const requireQueryParameters =
    (requiredParams: string[]) =>
    (req: Request, res: Response, next: NextFunction) => {
        const missingParams = requiredParams.filter(
            (param) => !(param in req.query)
        )
        if (missingParams.length > 0) {
            res.status(400).json({
                error: `Missing required query parameters: ${missingParams.join(', ')}`,
            })
            return
        }
        next()
    }
