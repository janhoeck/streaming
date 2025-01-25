export type RequiredQueryParameters<T = {}> = {
    channelId: string
    token: string
} & T
