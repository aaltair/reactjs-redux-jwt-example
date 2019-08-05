import { localizationStates } from '../states';

let localize = JSON.parse(localStorage.getItem('localization'));
const initialState = localize ? {localize} : {localize:{lang_key:"en",sRtl:false}};

export function localization(state = initialState, action) {
    switch (action.type) {
      case localizationStates.LOCALIZATION_REQUEST:
        return {
          localizing: true,
          localize: action.localize
        };
      case localizationStates.LOCALIZATION_CHANGED:
        return {  localize :action.localize}
        
      default:
        return state
    }
  }

