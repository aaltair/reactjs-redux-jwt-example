
import {localizationStates} from "../states"
import { BaseActions } from "./base.actions";
import {setLanguage  } from 'react-switch-lang';



class localizationAction extends BaseActions{

    localizationChange(lang_key) {

        return dispatch => {
            const isRtl = lang_key=== "ar"
            dispatch(request({ lang_key ,isRtl}));
         
            setTimeout(()=>{
                const isRtl = lang_key=== "ar"
                localStorage.setItem("localization",JSON.stringify({lang_key , isRtl}) )
                setLanguage(lang_key);
                dispatch(success({lang_key , isRtl}))
                document.getElementsByTagName("BODY")[0].setAttribute("class",lang_key ==="ar"?"rtl":""  )
         
             
              
            })

        }
     
    
    
        function request(localize) { return { type: localizationStates.LOCALIZATION_REQUEST, localize } }
        function success(localize) { return { type: localizationStates.LOCALIZATION_CHANGED, localize } }

    }
    
 

}

export const localizationActions =new localizationAction();

