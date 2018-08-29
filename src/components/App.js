import React, { Component } from 'react'
import StateLessComponent from './StatelessComponent'

export default class App extends Component {
    state = {
      cnt: 0
    }
    handleButtonClick = () => {
      this.setState(({ cnt }) => ({ cnt: cnt + 1 }))
    }

    render () {
      const { cnt } = this.state
      return (
        <div>
          <h1>Hello from APP</h1>
          <button onClick={this.handleButtonClick}>click on me #{cnt}</button>
          <StateLessComponent content={cnt} />
        </div>
      )
    }
}
