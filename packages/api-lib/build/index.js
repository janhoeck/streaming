'use strict'

var axios = require('axios')

class BaseEndpoint {
    constructor(api) {
        this.api = api
    }
}

const TAG = '[PointsEndpoint]'
class PointsEndpoint extends BaseEndpoint {
    async fetchAllUsersWatchtime() {
        try {
            return await this.api.get(`points/${this.api.channelId}/watchtime`)
        } catch (error) {
            console.error(TAG, 'Could not fetch the watchtime of all users')
            return { _total: 0, users: [] }
        }
    }
    async fetchUserWatchtime(username) {
        const watchtimeResponse = await this.fetchAllUsersWatchtime()
        return watchtimeResponse.users.find(
            (user) => user.username === username
        )
    }
}

class StreamElementsAPI {
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

exports.StreamElementsAPI = StreamElementsAPI
