import React from 'react';
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify"
import "./assets/css/app.style.scss";
import { BrowserRouter as Router,Route ,Switch,Redirect } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import {GlobalHistory,unregister} from "./helpers";
import {Account,Main,NotFound} from "./layouts"
import { Provider } from 'react-redux';
import {store} from "./redux"
import {localizationInit} from "./helpers"
ReactDOM.render(
  <Provider store={store}>
    <Router >
       <GlobalHistory />
       
    <Switch>
      <Route path="/account" component={Account} />
      <Route path="/main" component={Main} />
      <Redirect exact from="/" to={localStorage.getItem('user')?"/main/home":"/account/login"} />
      <Route component={NotFound} />
    
    </Switch>
    <ToastContainer/>
  </Router>
  </Provider>
    , document.getElementById('root'));
    document.title = "Courses";

    localizationInit();


