import React from "react";
import { Link } from "react-router-dom";
import {translate} from "react-switch-lang"


class HomeView extends React.Component {
componentDidMount(){
  const{t} = this.props;
  document.title= t("homeView.title")
}

 render() {
   const {t} = this.props;
  return (
    <div className="jumbotron">
      <h1 className="display-3">{t("homeView.courseApp")} </h1>
      <p className="lead"> {t("homeView.courseAppDesc")} </p>
      <hr className="my-2" />

      <p className="lead">
        <Link className="btn btn-primary btn-lg" to="/about" role="button">
        {t("homeView.about")} <i className="fa fa-camera" />
        </Link>
      </p>
    </div>
  );
}
}

const tHomeView = translate(HomeView)
export {tHomeView as HomeView}