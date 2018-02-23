import React, { Component } from 'react';
import fontawesome from '@fortawesome/fontawesome';
import fabSpotify from '@fortawesome/fontawesome-free-brands/faSpotify';
import fabInstagram from '@fortawesome/fontawesome-free-brands/faInstagram';
import fabTwitter from '@fortawesome/fontawesome-free-brands/faTwitter';
import fabFacebook from '@fortawesome/fontawesome-free-brands/faFacebook';
import '../../assets/Footer.css';

fontawesome.library.add(fabSpotify)
fontawesome.library.add(fabInstagram)
fontawesome.library.add(fabTwitter)
fontawesome.library.add(fabFacebook)

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
                            <ul>
                                <li>Tentang</li>
                                <li>Pekerjaan</li>
                                <li>Pers</li>
                                <li>Berita</li>
                            </ul>
                        </div>
                        <div className="komunitas">
                            <h3>Komunitas</h3>
                            <ul>
                                <li>Untuk Artis</li>
                                <li>Pengembang</li>
                                <li>Brands</li>
                            </ul>
                        </div>
                        <div className="tautan-berguna">
                            <h3>Tautan Berguna</h3>
                            <ul>
                                <li>Bantuan</li>
                                <li>Hadiah</li>
                                <li>Pemutar Web</li>
                            </ul>
                        </div>
                    </div>
                    <div className="right-menu">
                        <i className="instagram fab fa-instagram"></i>
                        <i className="twitter fab fa-twitter"></i>
                        <i className="facebook fab fa-facebook"></i>
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