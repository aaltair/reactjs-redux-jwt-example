import { combineReducers } from 'redux';
import { authentication } from './authentication.reducers';
import { localization } from './localization.reducers';


const rootReducer = combineReducers({
  authentication,localization
});

export default rootReducer;