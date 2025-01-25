"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const watchtimeRoute_1 = __importDefault(require("./routes/watchtimeRoute"));
const PORT = 3000;
const application = (0, express_1.default)();
application.use(watchtimeRoute_1.default);
application.listen(PORT, () => {
    console.log('streamelements-modejs-server started successfully and is listening on Port', PORT);
});
