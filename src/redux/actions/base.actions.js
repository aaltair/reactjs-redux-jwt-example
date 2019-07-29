import { toast } from 'react-toastify';

class BaseActions {


    showSuccess(message, conifgration={ autoClose: 1000 }){
        toast.success(message,conifgration );
    }

    showError(message, conifgration={autoClose: 1000}){
        toast.error(message, conifgration );
    }

    showWarn(message, conifgration={autoClose: 1000}){
        toast.warn(message, conifgration );
    }

    showinfo(message, conifgration={autoClose: 1000}){
        toast.info(message, conifgration );
    }
    

}
export {BaseActions}