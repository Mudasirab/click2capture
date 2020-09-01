
import { microservicesLinks } from './configService';

function getToken() {
    let user = JSON.parse(localStorage.getItem('accessToken'));

    if (user) {
        console.log("000", user.accessToken);
        return user.accessToken;
    }
}
let axiosConfig = {
    baseUrl: `${microservicesLinks.API}`,
    token: getToken()
}

export default axiosConfig;
