import React from "react";
import { Link } from "react-router-dom";


class HomeView extends React.Component {
 

 render() {
  return (
    <div className="jumbotron">
      <h1 className="display-3">Course App </h1>
      <p className="lead">Using react and redux</p>
      <hr className="my-2" />

      <p className="lead">
        <Link className="btn btn-primary btn-lg" to="/about" role="button">
          About Us <i className="fa fa-camera" />
        </Link>
      </p>
    </div>
  );
}
}

export { HomeView }