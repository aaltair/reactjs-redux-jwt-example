import { combineReducers } from 'redux';
import { authentication } from './authentication.reducers';
import { localization } from './localization.reducers';
import { courses } from './courses.reducers';


const rootReducer = combineReducers({
  authentication,localization,courses
});

export default rootReducer;