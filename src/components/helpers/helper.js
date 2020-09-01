const formatError = (errorList = []) => {
    let formatedErrors = {};
    for (let i = 0; i < errorList.length; i++) {
        let msg = errorList[i].message.replace(/"/g, '');
        msg = msg.charAt(0).toUpperCase() + msg.slice(1);
        formatedErrors[`error_${errorList[i].context.key}`] = msg;
    }
    return formatedErrors;
}

const validationError = (errors = {}) => {
    let a = {
        errors: {
            message: 'A validation error',
            name: 'ValidationError',
            data: errors
        }
    }
    return a
}

export {
    formatError,
    validationError,

};