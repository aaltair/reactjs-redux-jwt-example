import React from 'react';
import { Switch, Route,  Redirect  } from "react-router-dom";
import {PrivateRoute} from "./private.route.component"

class  SwitchRoute extends React.Component 
{

constructor(props){
    super(props);
    this.state = {
        routes: props.routes,
      };
      
}
    render(){

    const route = this.state.routes.find(f=>f.default===true);
        return(
            <Switch>
            {
                 this.state.routes.map((value, key) => {
                     if(value.authorize)
                     return <PrivateRoute  path={value.layout + value.path}  component={value.component} key={key}  />;
                
                     return <Route  path={value.layout + value.path}  component={value.component} key={key} />;
                })
            }
            {
              
                <Redirect exact from={route.layout} to={route.layout + route.path} />
            }
            </Switch>
            
        )

    }
    
}
export {SwitchRoute}

