import React, { Component } from 'react';
import Slider from 'react-slick';
import '../../../node_modules/slick-carousel/slick/slick.css';
import '../../../node_modules/slick-carousel/slick/slick-theme.css';
import '../../assets/Header.css';

class Header extends Component {
  render() {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <header>
            <Slider {...settings}>
                <div className="slick-slide-content">
                    <h3 className="slick-item-title">Musik untuk semua orang.</h3>
                    <div className="btn-group">
                        <a href="#" className="free-btn">Dapatkan Spotify Gratis</a>
                        <a href="#" className="premium-btn">Dapatkan Spotify Premium</a>
                    </div>
                </div>
                <div>
                    <h3 className="slick-item-title">
                        Premium untuk seluruh keluargamu. <br/>
                        Hanya Rp 79.000.
                    </h3>
                    <div className="btn-group">
                        <a href="#" className="free-btn">Pelajari Lebih Jauh</a>
                    </div>
                </div>
                <div>
                    <h3 className="slick-item-title">Pelajar menerima diskon 50% premium.</h3>
                    <div className="btn-group">
                        <a href="#" className="free-btn">Pelajari Lebih Jauh</a>
                    </div>
                </div>
                <div>
                    <h3 className="slick-item-title">
                        Putar Spotify di PlayStation<sup>®</sup>
                        dan di XBox<sup>®</sup> One.
                    </h3>
                    <div className="btn-group">
                        <a href="#" className="free-btn">Pelajari Lebih Jauh</a>
                    </div>
                </div>
            </Slider>
        </header>
    );
  }
}

export default Header;