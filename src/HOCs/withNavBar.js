import React, {Fragment} from 'react';
import NavBar from '../components/NavBar';
import { getDisplayName } from '../utils';

const withNavBar = (Component) => {
  const WithNavBarComponent = (props) => {
    return (
      <Fragment>
        <NavBar/>
        <Component {...props}/>
      </Fragment>
    );
  };
  WithNavBarComponent.displayName = `WithNavBar(${getDisplayName})`;
  return WithNavBarComponent;
};
export default withNavBar;
