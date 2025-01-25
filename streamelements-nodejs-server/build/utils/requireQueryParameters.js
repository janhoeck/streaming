"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requireQueryParameters = void 0;
const requireQueryParameters = (requiredParams) => (req, res, next) => {
    const missingParams = requiredParams.filter((param) => !(param in req.query));
    if (missingParams.length > 0) {
        res.status(400).json({
            error: `Missing required query parameters: ${missingParams.join(', ')}`,
        });
        return;
    }
    next();
};
exports.requireQueryParameters = requireQueryParameters;
