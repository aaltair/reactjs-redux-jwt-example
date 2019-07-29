import React from 'react';
import { withRouter } from 'react-router';
import { translate  } from 'react-switch-lang';

// variable which will point to react-router history
let globalHistory = null;
let mytranslate = null;
// component which we will mount on top of the app
class Spy extends React.Component {
  componentWillMount() {
    

    const { history } = this.props;
    const { t } = this.props;
    globalHistory = history; 
    mytranslate = t;
  }

  componentWillReceiveProps(nextProps) {
    globalHistory = nextProps.history;
    mytranslate = nextProps.t;
  }

  render(){
    return null;
  }
}

export const GlobalHistory = withRouter(translate(Spy));


// export react-router history
export  function getHistory() {    
  return globalHistory;
}

export  function getTranslate() {  

  console.log(mytranslate)  
  return mytranslate;
}