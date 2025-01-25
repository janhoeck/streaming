import { PointsEndpoint } from './endpoints/PointsEndpoint'
import axios from 'axios'
export class StreamElementsAPI {
    constructor(channelId, jwtToken) {
        this.baseUrl = 'https://api.streamelements.com/kappa/v2/'
        // endpoints
        this.points = new PointsEndpoint(this)
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
    async get(path) {
        const response = await this.instance.get(path)
        return response.data
    }
}
