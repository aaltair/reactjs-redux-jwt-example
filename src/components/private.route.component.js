import React from 'react';
import { Route, Redirect } from 'react-router-dom';
export const PrivateRoute = ({ component: Component,login="/account/login", ...rest }) => ( 
    <Route {...rest} render={props => (
        JSON.parse(localStorage.getItem('user'))
            ? <Component {...props} />
            :  <Redirect to={login}   />
    )} />
)