class ErrorHandler extends Error
{
    constructor(message, statusCode){
        console.log('Message',message);
        super(message);
        this.statusCode = statusCode;
        return Error.captureStackTrace(this,message);
    }
}

module.exports = ErrorHandler;