import { BaseEndpoint } from './BaseEndpoint'

export type User = {
    username: string
    minutes: number
}

export type WatchtimeResponse = {
    _total: number
    users: Array<User>
}

const TAG = '[PointsEndpoint]'

export class PointsEndpoint extends BaseEndpoint {
    private async fetchAllUsersWatchtime(): Promise<WatchtimeResponse> {
        try {
            return await this.api.get<WatchtimeResponse>(
                `points/${this.api.channelId}/watchtime`
            )
        } catch (error) {
            console.error(TAG, 'Could not fetch the watchtime of all users')
            return { _total: 0, users: [] }
        }
    }

    async fetchUserWatchtime(username: string): Promise<User | undefined> {
        const watchtimeResponse = await this.fetchAllUsersWatchtime()
        return watchtimeResponse.users.find(
            (user) => user.username === username
        )
    }
}
