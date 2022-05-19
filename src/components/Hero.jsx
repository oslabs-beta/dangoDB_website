import React from 'react';
import dangoLogo from '../assets/dangoDB_logo_long_midboi.png'

// Hero banner for home page
function Hero() {

    return (
        <section className="hero-container">
            <img src={dangoLogo} alt="dangoDB Main Logo" id="dango-main-logo"/>
        </section>
    );
};
 
export default Hero;