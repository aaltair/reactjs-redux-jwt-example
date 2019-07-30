import React from "react";
import { Link } from "react-router-dom";
import {translate} from "react-switch-lang"
import {connect} from "react-redux"
class FooterView extends React.Component{
  render() {
 const {t ,  localize} = this.props;
  return (
      
    <nav className="navbar fixed-bottom   navbar-light bg-faded w-100 d-inline-block text-center ">
    <Link className="navbar-brand " to="/"> 
   {   !localize.isRtl ?<i className="fa fa-copyright px-1" aria-hidden="true"></i>:"" }
    {t("footerView.copyright" )}
    { localize.isRtl ?<i className="fa fa-copyright px-1" aria-hidden="true"></i>:"" } 
     </Link>
  </nav>
   );
}
}

function mapStateToProps(state) {
  const { localization } = state;
  const { localize } = localization;
  return {
      localize
  };

}


const tFooterView = connect (mapStateToProps)(translate(FooterView) );
export { tFooterView as FooterView  };
