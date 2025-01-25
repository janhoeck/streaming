"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const requireQueryParameters_1 = require("../utils/requireQueryParameters");
const watchtimeController_1 = require("../controllers/watchtimeController");
const router = express_1.default.Router();
router.use((0, requireQueryParameters_1.requireQueryParameters)(['channelId', 'token', 'username']));
router.get('/watchtime', watchtimeController_1.getWatchtimeHandler);
exports.default = router;
