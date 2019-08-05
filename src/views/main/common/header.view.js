import React from "react";
import {NavLink} from "react-router-dom"
import { userActions ,localizationActions } from '../../../redux';
import {translate} from "react-switch-lang"
import { connect } from 'react-redux';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
class HeaderView extends React.Component{

  constructor(props){
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
    this.langeChange = this.langeChange.bind(this);
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  langeChange(e){
    const {dispatch } = this.props;
    dispatch(localizationActions.localizationChange(e.target.value))
  }

 handleLogout(){
  const { dispatch } = this.props;


    dispatch(userActions.logout());
 }

  render(){
  const activeStyle = { color: "white" };
  const { user } = this.props;
  const { localize ,t } = this.props;
  return (
 <div>
        <Navbar color="primary" light expand="md">
          <NavbarBrand className="text-white">{t("headerView.courses")}</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem className="p-2">
                <NavLink activeStyle={activeStyle} to="/main/home">{t("headerView.home")}</NavLink>
              </NavItem>
              <NavItem className="p-2">
                <NavLink activeStyle={activeStyle} to="/main/courses">{t("headerView.courses")}</NavLink>
              </NavItem>
              <NavItem className="p-2">
                <NavLink activeStyle={activeStyle} to="/main/about">{t("headerView.about")}</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret className="text-white">
                  {localize.isRtl? user.fullName : user.fullNameEn}
                </DropdownToggle>
                <DropdownMenu right>
                  {
                   localize.isRtl? 
                      <DropdownItem onClick={this.langeChange} value="en">  {t("headerView.lang")} </DropdownItem>  :
                      <DropdownItem onClick={this.langeChange} value="ar">  {t("headerView.lang")}   </DropdownItem>    
                  }
                
                  <DropdownItem divider />
                  <DropdownItem onClick={this.handleLogout}>
                  {t("headerView.logout")} 
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
  );
}
}
function mapStateToProps(state) {
  const {  authentication ,localization } = state;
  const { user } = authentication;
  const { localize } = localization;
  console.log(localize)
  return {
      user,
      localize
  };

}
const connectedHeaderView = connect(mapStateToProps)(translate(HeaderView));

export { connectedHeaderView as HeaderView };