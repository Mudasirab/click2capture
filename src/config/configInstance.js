
import axios from "axios";
import axiosConfig from "./axios-confog";

// console.log("axiosConfig.token",axiosConfig.token);
// let user = JSON.parse(localStorage.getItem('userDetail'));

const caviInstance = axios.create({
    baseURL: axiosConfig.baseUrl,
    timeout: 2000,
    headers: { 'Authorization': `Bearer ${axiosConfig.token}`, 'Pragma': 'no-cache' }
});

export default caviInstance;
