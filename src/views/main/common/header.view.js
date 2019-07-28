import React from "react";
import { NavLink } from "react-router-dom";
import { userActions } from '../../../redux';
import { connect } from 'react-redux';
class HeaderView extends React.Component{

  constructor(props){
    super(props);
    console.log(this.props)
    this.handleLogout = this.handleLogout.bind(this);
  }

 handleLogout(e){
  const { dispatch } = this.props;


    dispatch(userActions.logout());
 }
  render(){
  const activeStyle = { color: "white" };
  const { user } = this.props;
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
      <NavLink className="navbar-brand" to="/main/home">
        {user.fullName}
      </NavLink>
      <button
        className="navbar-toggler d-lg-none"
        type="button"
        data-toggle="collapse"
        data-target="#collapsibleNavId"
        aria-controls="collapsibleNavId"
        aria-expanded="false"
        aria-label="Toggle navigation"
      />
      <div className="collapse navbar-collapse" id="collapsibleNavId">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item ">
            <NavLink
              className="nav-link"
              activeStyle={activeStyle}
              to="/main/home"
              exact
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/main/courses">
              courses
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/main/about">
              About Us
            </NavLink>
          </li>

          <li className="nav-item">
            <a className="nav-link" onClick={this.handleLogout}>
              Logout
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
}
function mapStateToProps(state) {
  const {  authentication } = state;
  const { user } = authentication;
  return {
      user,
  };

}
const connectedHeaderView = connect(mapStateToProps)(HeaderView);

export { connectedHeaderView as HeaderView };