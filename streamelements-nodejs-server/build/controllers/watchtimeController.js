"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getWatchtimeHandler = void 0;
const api_lib_1 = require("@janhck/api-lib");
const getWatchtimeHandler = (req, res) => {
    const { channelId, token, username } = req.query;
    const streamElementsAPI = new api_lib_1.StreamElementsAPI(channelId, token);
    streamElementsAPI.points
        .fetchUserWatchtime(username)
        .then((user) => {
        if (!user) {
            res.status(404);
            return;
        }
        res.status(200);
        res.send(user.minutes);
    })
        .catch(() => {
        res.status(500);
    });
};
exports.getWatchtimeHandler = getWatchtimeHandler;
