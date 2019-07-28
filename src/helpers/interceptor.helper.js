import fetchIntercept from 'fetch-intercept';
import {getHistory as history} from "./history.helper"

export const unregister = fetchIntercept.register({

    request: function (url, config) {
       // debugger
        // Modify the url or config here
        config.headers.Authorization= authHeader();
        return [url, config];
    },
 
    requestError: function (error) {
        // Called when an error occured during another 'request' interceptor call
        return Promise.reject(error);
    },
 
    response: function (response) {
        // Modify the reponse object
        return response.json();
    },
 
    responseError: function (error) {
      
                if (error.status === 401) {
                    // auto logout if 401 response returned from api
                 //   userService.logout();
                    history().push('/login');
                }
                return Promise.reject(error);
            }
    
          

});

function authHeader() {
    // return authorization header with jwt token
    let user = JSON.parse(localStorage.getItem('user'));

    if (user && user.token) {
        return 'Bearer ' + user.token ;
    } else {
        return "";
    }
}