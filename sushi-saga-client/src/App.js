import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state ={
    sushis: 
  }

  componentDidMount() {
fetch(API)
.then(response => response.json())
.then(data => this.setState({
  sushis: data
}))
  }

  render() {
    return (
      <div className="app">
        <SushiContainer sushiToDisplay={this.sushiToDisplay()} />
        <Table />
      </div>
    );
  }
}

sushiToDisplay = () => {
  return this.state.allSushi.slice(0, 4)
}

addMoreSushi = () => {
//this button will be clicked in 'more button'

}

export default App;