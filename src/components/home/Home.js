import React, { Component } from 'react';
import Navbar from './Navbar';
import Header from './Header';
import Footer from './Footer';

class Home extends Component {
  render() {
    return (
        <div>
            <Navbar/>
            <Header/>
            <Footer/>
        </div>
    );
  }
}

export default Home;