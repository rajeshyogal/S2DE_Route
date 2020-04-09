import { authenticationService } from '../services/authenticationService';

export function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if ([401, 403, 400].indexOf(response.status) !== -1) {
                // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
                authenticationService.logout();
                // location.reload(true);
                console.log("This is when server did not respond");
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        console.log("I am here at handleResponse");
        //console.log(data);
        return data;
    });
}