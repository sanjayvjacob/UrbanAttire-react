import React from 'react';
import { Link } from 'react-scroll';
import "./Hero.css";
import arrowIcon from "../../assets/icons/arrow.png";
import heroImg from "../../assets/rightImg2.png";

const Hero = () => {
  return (
    <div className='hero'>
      <div className='hero-left'>
        <h2>Latest from UrbanAttire</h2>
        <div>
          <div className='hero-hand-icon'>
            <p>new</p>
          </div>
          <p>collections</p>
          <p>for everyone</p>
        </div>

        <Link
          activeClass="active"
          to="newCollections"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className='hero-latest-button'
        >
          Latest collection
          <img src={arrowIcon} alt="Arrow Icon" />
        </Link>
      </div>

      <div className='hero-right'>
        <img src={heroImg} alt="Hero Image" />
      </div>
    </div>
  );
};

export default Hero;
