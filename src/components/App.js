import React, { Component} from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import AllGoodsPage from '../pages/AllGoodsPage'
import BasketPage from '../pages/BasketPage'
import SubmitPage from '../pages/SubmitPage'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core'
import AppProvider from '../elements/AppProvider'

class App extends Component {
    state = {
      cnt: 0
    }
    static propTypes={
      classes: PropTypes.object
    }

    handleButtonClick = () => {
      this.setState(({ cnt }) => ({ cnt: cnt + 1 }))
    }

    render () {
      const {classes} = this.props
      return (
        <AppProvider>
          <div className={classes.wraper}>
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
          </div>
        </AppProvider>
      )
    }
}
const styles = {
  wraper: {
    'max-width': '1920px'
  }
}

export default withStyles(styles)(App)
