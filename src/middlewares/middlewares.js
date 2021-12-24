const syncHandler = (fn) => (req, res, next) => {
    try {
        fn(req, res, next)
    } catch (error) {
        next(error);
    }
};

const logger = (req, res, next) => {
    console.log('URL = ', req.url);
    console.log('METHOD = ', req.method);
    console.log('HOST = ', req.headers.host);
    console.log('IsSecure =', req.secure);
    console.log('Query = ', req.query);
    console.log('Body = ', req.body);

    next();
};

const asyncHandler = (fn) => (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next);
};

const errorHandler = (err, req, res, next) => {
    console.log('Ошибка', {
        message: err.message,
        stack: err.stack,
    });
    if (typeof err.code === "number") {

        res.status(err.code).json({
            message: err.message
        });
    } else {
        res.status(500).json({
            message: err.message
        });
    }
};

module.exports = {
    asyncHandler,
    syncHandler,
    logger,
    errorHandler
}