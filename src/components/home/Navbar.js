import React, { Component } from 'react';
import '../../assets/Navbar.css';
import fontawesome from '@fortawesome/fontawesome';
import fabSpotify from '@fortawesome/fontawesome-free-brands/faSpotify';
import fabBars from '@fortawesome/fontawesome-free-solid/faBars';

fontawesome.library.add(fabSpotify)
fontawesome.library.add(fabBars)

class Navbar extends Component {

    constructor(props){
        super(props);
        this.state = { navStatus: false };
        this.openNav = this.openNav.bind(this);
        this.closeNav = this.closeNav.bind(this);
    }

    openNav(){
        this.setState(prevState => ({
            navStatus: !prevState.navStatus
        }));
    }

    closeNav(){
        this.setState(prevState => ({
            navStatus: !prevState.navStatus
        }));
    }

    render() {
        const showNav = { width: '100%' };
        const hideNav = { width: '0' };
        return (
            <div>
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
                        <li className="nav-item humburger-icon" onClick={this.openNav}><i className="fas fa-bars"></i></li>
                    </ul>
                </nav>
                <div id="myNav" className="overlay" style={this.state.navStatus? showNav : hideNav}>
                    <div className="closebtn" onClick={this.closeNav}>&times;</div>
                    <div className="overlay-content">
                        <li><h1>Premium</h1></li>
                        <li><h1>Bantuan</h1></li>
                        <li><h1>Download</h1></li>
                        <li className="separator"></li>
                        <li className="nav-item">Daftar</li>
                        <li className="nav-item">Masuk</li>
                        <li className="nav-item">
                            <i className="fab fa-spotify fa-2x"></i> <span>Spotify</span>
                        </li>
                    </div>
                </div>
            </div>
        );
    }
}

export default Navbar;