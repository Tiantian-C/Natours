class AppError extends Error{
    constructor(message, statusCode) {
        super(message);

        this.statusCode = statusCode;
        this.status = `${this.statusCode}`.startsWith('4') ? 'fail' : 'error';
        this.isOperational = true;//all the errors we created by ourselves are optional

        Error.captureStackTrace(this, this.constructor);
    }
}

module.exports = AppError;