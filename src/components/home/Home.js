import React, { Component } from 'react';
import Navbar from './Navbar';
import Header from './Header';
import WhatsNew from './WhatsNew';

class Home extends Component {
  render() {
    return (
        <div>
            <Navbar/>
            <Header/>
            <WhatsNew/>
        </div>
    );
  }
}

export default Home;