import { BaseEndpoint } from './BaseEndpoint'
const TAG = '[PointsEndpoint]'
export class PointsEndpoint extends BaseEndpoint {
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
