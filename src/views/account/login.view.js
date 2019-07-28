import React from "react"
import { connect } from 'react-redux';
import { userActions } from '../../redux';
import { getHistory as history} from "../../helpers"

class LoginView extends React.Component {
constructor(props){
  super(props);

  this.state={
    username:"",
    password:"",
    submitted: false
  }
  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
}
componentDidMount(){
  const {loggedIn } = this.props;
  if(loggedIn) history().push("/main/home") ;
}
handleChange(e) {
  const { name, value } = e.target;
  this.setState({ [name]: value });
}

handleSubmit(e) {
  e.preventDefault();
 
  this.setState({ submitted: true });
  const { username, password } = this.state;
  const { dispatch } = this.props;
  if (username && password) {

    dispatch(userActions.login(username, password));
   
  }
}

render(){
  const { loggingIn } = this.props;
  const { username, password, submitted } = this.state;
    return(
  <div className="wrapper fadeInDown">
  <div id="formContent">
  
    <div className="fadeIn first py-2">
      <img src="https://cdn.imgbin.com/15/13/11/imgbin-computer-icons-font-awesome-blog-social-login-font-others-anytbXDEPQcudwnWc6kA57YUF.jpg" id="icon" alt="User Icon" />
    </div>

    <form  onSubmit={this.handleSubmit}>
      <input type="text" id="login" className="fadeIn second" name="username" placeholder="username" value={username} onChange={this.handleChange}/>
      {submitted && !username &&
                            <div className="help-block">Username is required</div>
                        }
      <input type="password" id="password" className="fadeIn third" name="password"  placeholder="password" value={password} onChange={this.handleChange}/>
      {submitted && !password &&
                            <div className="help-block">Password is required</div>
                        }
      <input type="submit" className="fadeIn fourth" value="Log In"/>
      {loggingIn &&
                            // eslint-disable-next-line jsx-a11y/alt-text
                            <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                        }
    </form>

    <div id="formFooter">
      <div className="underlineHover">Forgot Password?</div>
    </div>

  </div>
  </div>    
  );
}

}

function mapStateToProps(state) {
  const { loggingIn } = state.authentication;
  const { loggedIn } = state.authentication;
  return {
      loggingIn,
      loggedIn
  };
}
const connectedLoginView = connect(mapStateToProps)(LoginView);
export { connectedLoginView as LoginView }; 



