import { BaseEndpoint } from './BaseEndpoint'
export type User = {
    username: string
    minutes: string
}
export type WatchtimeResponse = {
    _total: number
    users: Array<User>
}
export declare class PointsEndpoint extends BaseEndpoint {
    private fetchAllUsersWatchtime
    fetchUserWatchtime(username: string): Promise<User | undefined>
}
