import React, { Component } from 'react';
import fontawesome from '@fortawesome/fontawesome';
import fabSpotify from '@fortawesome/fontawesome-free-brands/faSpotify';
import '../../assets/Footer.css';

fontawesome.library.add(fabSpotify)

class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="content">
                    <div className="left-menu">
                        <div className="spotify-logo">
                            <i className="fab fa-spotify fa-2x"></i> <span>Spotify</span>
                        </div>
                        <div className="perusahaan">
                            <h3>Perusahaan</h3>
                        </div>
                        <div className="komunitas">
                            <h3>Komunitas</h3>
                        </div>
                        <div className="tautan-berguna">
                            <h3>Tautan Berguna</h3>
                        </div>
                    </div>
                    <div className="right-menu">
                        <div className="instagram"></div>
                        <div className="twitter"></div>
                        <div className="facebook"></div>
                    </div>
                </div>
                <div className="bottom">
                    <div className="left-bottom">

                    </div>
                    <div className="right-bottom">

                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;