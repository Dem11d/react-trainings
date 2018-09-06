import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import AllGoodsPage from '../pages/AllGoodsPage';
import CartPage from '../pages/CartPage';
import SubmitPage from '../pages/SubmitPage';
import {Provider} from '../components/ApplicationContext';
import NavBar from './NavBar';
import styled from 'styled-components';

const Wrapper = styled.div`
  max-width: 1920px;
`;

const App = (props) => {
  return (
    <Provider>
      <Router>
        <Wrapper>
          <NavBar/>
          <hr />
          <Route exact path="/" component={AllGoodsPage} />
          <Route path="/basket" component={CartPage} />
          <Route path="/submit" component={SubmitPage} />
        </Wrapper>
      </Router>
    </Provider>
  );
};

export default App;
