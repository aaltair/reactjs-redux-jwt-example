import React from "react"
import {AccountRoutes} from "../routes"
import {SwitchRoute} from "../components"


class Account extends React.Component{
    

    render(){

        return (
            <div className="container-fluid py-5">
                <SwitchRoute routes={AccountRoutes}/>
           
            </div>
      
      );

    }
}
export {Account};
