import {userService} from "../../services"
import {userStates} from "../states"
import { getHistory as history} from "../../helpers"

export const userActions = {
    login,
    logout
};

function login(username, password) {
    return dispatch => {
        dispatch(request({ username }));

        userService.login(username, password)
            .then(
                user => { 
               localStorage.setItem('user', JSON.stringify(user));
                 dispatch(success(user));
                 history().push("/main/home");
                },
                error => {
                    dispatch(failure(error));
                }
            );
    };

    function request(user) { return { type: userStates.LOGIN_REQUEST, user } }
    function success(user) { return { type: userStates.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: userStates.LOGIN_FAILURE, error } }
}

function logout() {
    userService.logout();
    history().push("/account/login");
    return { type: userStates.LOGOUT };
}
