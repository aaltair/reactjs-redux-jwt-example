import React from "react"
import {AccountRoutes} from "../routes"
import {SwitchRoute} from "../components"
import { ToastContainer } from "react-toastify"

class Account extends React.Component{
    

    render(){

        return (
            <div className="container-fluid py-5">
                <SwitchRoute routes={AccountRoutes}/>
                <ToastContainer />
            </div>
      
      );

    }
}
export {Account};
