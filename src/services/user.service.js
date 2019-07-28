import {ApiConstants} from "../constants"
export const userService = {
    login,
    logout,
};

function login(username,password)
{
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    };

    return fetch(`${ApiConstants.IDENTITY_API}/Account/login`, requestOptions);


}

function logout (){
    localStorage.removeItem('user');
}
