import React from "react";

import {
    useLocation,
    useNavigate,
    useParams,
    
    
  } from "react-router-dom";
  // import { useHistory } from 'react-router';

  
  
  
 function withRouter(Component) {
    function ComponentWithRouterProp(props) {
      let location = useLocation();
      let navigate = useNavigate();
      let params = useParams();
      // let history = useHistory();
      
      return (
        <Component
          {...props}
          router={{ location, navigate, params}}
        />
      );
    }
  
    return ComponentWithRouterProp;
  }



  
  export default withRouter;


