import React, { Component } from 'react';
import '../../assets/Navbar.css';
import fontawesome from '@fortawesome/fontawesome';
import fabSpotify from '@fortawesome/fontawesome-free-brands/faSpotify';
import fabBars from '@fortawesome/fontawesome-free-solid/faBars';

fontawesome.library.add(fabSpotify)
fontawesome.library.add(fabBars)

class Navbar extends Component {
  render() {
    return (
        <nav>
            <div className="brand-name"><i className="fab fa-spotify fa-2x"></i> <span>Spotify</span></div>
            <ul className="nav-links">
                <div className="nav-desktop-item">
                    <li className="nav-item">Premium</li>
                    <li className="nav-item">Bantuan</li>
                    <li className="nav-item">Download</li>
                    <li className="nav-item-separator"></li>
                    <li className="nav-item">Daftar</li>
                    <li className="nav-item">Masuk</li>
                </div>
                <li className="nav-item humburger-icon"><i className="fas fa-bars"></i></li>
            </ul>
        </nav>
    );
  }
}

export default Navbar;