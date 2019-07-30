import {  setTranslations,  setDefaultLanguage,setLanguage} from "react-switch-lang";
import en from "../assets/i18n/en.json";
import ar from "../assets/i18n/ar.json";

export function localizationInit()
{
    setTranslations({ en, ar });
    setDefaultLanguage('en');

    if(localStorage.getItem("localization")) 
    {
        const lang= JSON.parse(localStorage.getItem("localization"));
        setLanguage(lang.lang_key) 
        document.getElementsByTagName("BODY")[0].setAttribute("class",lang.lang_key ==="ar"?"rtl":""  )    
    }
    else
    {
        localStorage.setItem("localization",JSON.stringify({"lang_key":"en","isRtl":false}));
    }

    return;
}
