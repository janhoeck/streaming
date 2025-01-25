import { Request } from 'express'

export type BaseRequest<T = {}> = Request<{}, {}, {}, T>
