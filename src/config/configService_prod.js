module.exports = {
    microservicesLinks: {
        API: `${process.env.REACT_APP_PROD_API_SERVICE_SCHEME || 'http'}://${process.env.REACT_APP_PROD_API_SERVICE_HOST || '10.5.3.97'}:${process.env.REACT_APP_PROD_API_SERVICE_PORT || '3003'}${process.env.REACT_APP_PROD_API_SERVICE_PATH || '/api/'}${process.env.REACT_APP_PROD_API_SERVICE_VERSION || 'v1.0/1/'}`,
    }
};