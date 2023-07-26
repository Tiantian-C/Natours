class AppError extends Error{
    constructor(message, statusCode) {
        super(message);

        this.statusCode = statusCode;
        this.status = `${this.statusCode}`.startsWith('4') ? 'fail' : 'error';
        this.isOperational = true;//all the error

        Error.captureStackTrace(this, this.constructor);
    }
}

module.exports = AppError;