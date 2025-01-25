import { Request } from 'express'
import { RequiredQueryParameters } from './RequiredQueryParameters'

export type BaseRequest<T = {}> = Request<
    {},
    {},
    {},
    RequiredQueryParameters<T>
>
