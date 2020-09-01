import caviInstance from "../config/configInstance";

function services() { }
services.prototype.post = async function (endPoint, data) {
    try {
        return await caviInstance.post(`${endPoint}`, data);
    } catch (err) {
        return err;
    }
};
services.prototype.update = async function (endPoint, data) {
    try {
        return await caviInstance.put(`${endPoint}`, data);
    } catch (err) {
        return err;
    }
};
services.prototype.delete = async function (endPoint) {
    try {
        return await caviInstance.delete(`${endPoint}`);
    } catch (err) {
        return err;
    }
};
services.prototype.deleteMultiple = async function (endPoint, data) {
    try {
        return await caviInstance.delete(`${endPoint}`, data);
    } catch (err) {
        return err;
    }
};
services.prototype.get = async function (endPoint) {
    try {
        return await caviInstance.get(`${endPoint}`);
    } catch (err) {
        return err;
    }
};


let apiService = new services();

export { apiService };
