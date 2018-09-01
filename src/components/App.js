import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import AllGoodsPage from '../pages/AllGoodsPage';
import BasketPage from '../pages/BasketPage';
import SubmitPage from '../pages/SubmitPage';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import {Provider} from '../components/ApplicationContext';

const App = (props) => {
  const {classes} = props;
  return (
    <div className={classes.wraper}>
      <Provider value={{someGoods: 'goods'}}>
        <Router>
          <div>
            <ul>
              <li>
                <Link to="/">All goods</Link>
              </li>
              <li>
                <Link to="/basket">Basket</Link>
              </li>
              <li>
                <Link to="/submit">Submit</Link>
              </li>
            </ul>
            <hr />
            <Route exact path="/" component={AllGoodsPage} />
            <Route path="/basket" component={BasketPage} />
            <Route path="/submit" component={SubmitPage} />
          </div>
        </Router>
      </Provider>
    </div>
  );
};

App.propTypes = {
  classes: PropTypes.object
};

const styles = {
  wraper: {
    'max-width': '1920px'
  }
};
export default (withStyles(styles)(App));
