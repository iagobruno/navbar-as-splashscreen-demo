import React, { Component } from 'react'

import Navbar from './Navbar';
import List from './List';

class App extends Component {
  state = {
    loading: true
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ loading: false })
    }, 2000)
  }

  render() {
    return (
      <>
        <Navbar expanded={this.state.loading} />

        <div className="content">
          <div className="info">You can use the keyboard to navigate 👀</div>
          <List title="My list" />
          <List title="Netflix Originals" />
          <List title="Recently added"  />
        </div>
      </>
    )
  }
}

export default App
