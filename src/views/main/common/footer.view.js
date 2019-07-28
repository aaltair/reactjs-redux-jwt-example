import React from "react";
import { Link } from "react-router-dom";
function FooterView() {
  return (
      
    <nav className="navbar fixed-bottom navbar-light bg-faded w-100 d-inline-block text-center ">
    <Link className="navbar-brand " to="/"> 
    <i className="fa fa-copyright" aria-hidden="true"></i>
    copyright 2019-2020
     </Link>
  </nav>
   );
}
export { FooterView };
