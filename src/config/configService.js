
if (process.env.NODE_ENV === 'production') {
    module.exports = require('./configService_prod');
} else {
    module.exports = require('./configService_dev');
}
