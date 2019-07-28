import { userStates } from '../states';

let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? { loggedIn: true, user } : {};

export function authentication(state = initialState, action) {
    switch (action.type) {
      case userStates.LOGIN_REQUEST:
        return {
          loggingIn: true,
          user: action.user
        };
      case userStates.LOGIN_SUCCESS:
        return {
          loggedIn: true,
          user: action.user
        };
      case userStates.LOGIN_FAILURE:
        return {};
      case userStates.LOGOUT:
        return {};
      default:
        return state
    }
  }

