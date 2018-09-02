import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import AllGoodsPage from '../pages/AllGoodsPage';
import CartPage from '../pages/CartPage';
import SubmitPage from '../pages/SubmitPage';
import {Provider} from '../components/ApplicationContext';

const App = (props) => {
  return (
    <div>
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
            <Route path="/basket" component={CartPage} />
            <Route path="/submit" component={SubmitPage} />
          </div>
        </Router>
      </Provider>
    </div>
  );
};

export default App;
