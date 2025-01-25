import { StreamElementsAPI } from '../StreamElementsAPI'

export abstract class BaseEndpoint {
    api: StreamElementsAPI

    constructor(api: StreamElementsAPI) {
        this.api = api
    }
}
