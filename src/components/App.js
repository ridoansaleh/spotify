import React, { Component } from 'react';
import Home from './home/Home';
import Header from './home/Header';

class App extends Component {
  render() {
    return (
        <div>
            <Home/>
            <Header/>
        </div>
    );
  }
}

export default App;