import React from "react";
import { Link } from "react-router-dom";
import {translate} from "react-switch-lang"

class NotFound extends React.Component{
 render() {
   const {t} =this.props
  return (
    <div className="row">
      <div className="col-md-12">
        <div className="error-template">
          <h1> {t("notFoundLayout.oops")}</h1>
          <h2>{t("notFoundLayout.notFound")}</h2>
          <div class="error-details">
          {t("notFoundLayout.errorDetails")}
          
          </div>
          <div class="error-actions">
            <Link to="/" className="btn btn-primary btn-lg">
              <span className="glyphicon glyphicon-home" />
              {t("notFoundLayout.TakeMeHome")}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 

}

const tNotFound = translate(NotFound);

export { tNotFound as NotFound };
