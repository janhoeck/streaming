import { PointsEndpoint } from './endpoints/PointsEndpoint'
import { AxiosInstance } from 'axios'
export declare class StreamElementsAPI {
    baseUrl: string
    channelId: string
    points: PointsEndpoint
    instance: AxiosInstance
    constructor(channelId: string, jwtToken: string)
    get<T>(path: string): Promise<T>
}
