import {userService} from "../../services"
import {userStates} from "../states"
import { getHistory as history  } from "../../helpers"
import { BaseActions } from "./base.actions";
import { getTranslate as t  } from "../../helpers"


class userAction extends BaseActions{

 login(username, password) {
        return dispatch => {
            dispatch(request({ username }));
    
            userService.login(username, password)
                .then(
                    user => { 
                   localStorage.setItem('user', JSON.stringify(user));
                    this.showSuccess(t()("Login_Successfuly"))
                     dispatch(success(user));
                     history().push("/main/home");
                    },
                    error => {
                        dispatch(failure(error));
                        this.showError(t()("Server_Error"))
                    }
                );
        };
        
        function request(user) { return { type: userStates.LOGIN_REQUEST, user } }
        function success(user) { return { type: userStates.LOGIN_SUCCESS, user } }
        function failure(error) { return { type: userStates.LOGIN_FAILURE, error } }
    }
    
 logout() {
        userService.logout();
        history().push("/account/login");
        return { type: userStates.LOGOUT };
    }

}

export const userActions =new userAction();



