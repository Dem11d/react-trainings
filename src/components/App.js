import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import AllGoodsPage from '../pages/AllGoods';
import CartPage from '../pages/Cart';
import SubmitPage from '../pages/Submit';
import {Provider} from '../components/ApplicationContext';
import styled from 'styled-components';

const Wrapper = styled.div`
  max-width: 1920px;
  margin: 0 auto;
`;

const App = (props) => {
  return (
    <Provider>
      <Router>
        <Wrapper>
          <Switch>
            <Route path="/" exact component={AllGoodsPage} />
            <Route path="/basket" component={CartPage} />
            <Route path="/submit" component={SubmitPage} />
          </Switch>
          {null}
        </Wrapper>
      </Router>
    </Provider>
  );
};

export default App;
