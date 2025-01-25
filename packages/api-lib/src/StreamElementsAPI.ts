import { PointsEndpoint } from './endpoints/PointsEndpoint'
import axios, { AxiosInstance } from 'axios'

export class StreamElementsAPI {
    baseUrl: string = 'https://api.streamelements.com/kappa/v2/'
    channelId: string

    // endpoints
    points: PointsEndpoint = new PointsEndpoint(this)

    // axios instance
    instance: AxiosInstance

    constructor(channelId: string, jwtToken: string) {
        this.channelId = channelId

        this.instance = axios.create({
            baseURL: 'https://api.streamelements.com/kappa/v2/',
            timeout: 1000,
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${jwtToken}`,
            },
        })
    }

    async get<T>(path: string): Promise<T> {
        const response = await this.instance.get<T>(path)
        return response.data
    }
}
