module.exports = {
    microservicesLinks: {
        API: `${process.env.REACT_APP_API_SERVICE_SCHEME || "http"}://${process
            .env.REACT_APP_API_SERVICE_HOST || "localhost"}:${process.env
                .REACT_APP_API_SERVICE_PORT || "8080"}${process.env
                    .REACT_APP_API_SERVICE_PATH || "/api/"}`,
    }
};
