const ErrorResponse = require("../classes/error-response");

const syncHandler = (fn) => (req, res, next) => {
    try {
        fn(req, res, next)
    } catch (error) {
        next(error);
    }
};
const asyncHandler = (fn) => (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next);
};
//const notFound = (req, _res, next) => {

const errorHandler = (req, res, next) => {
    console.log('Ошибка', {
        message: err.message,
        stack: err.stack,
    });
    res.status(err.code || 500).json({
        message: err.message
    });
};

module.exports = {
    asyncHandler,
    syncHandler,
    // notFound,
    errorHandler
}