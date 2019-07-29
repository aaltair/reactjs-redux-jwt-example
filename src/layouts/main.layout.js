import React from "react"
import {MainRoutes} from "../routes"
import {SwitchRoute} from "../components"
import{HeaderView,FooterView} from "../views/main"
import { ToastContainer } from "react-toastify"
class Main extends React.Component{
    
    render(){

        return (
            <div className="container-fluid">
            <HeaderView/>
            
                <SwitchRoute routes={MainRoutes}/>
           
               <FooterView/>
               <ToastContainer/>
            </div>

        );

    }
}
export {Main };