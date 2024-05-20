import React from 'react'
import "./Hero.css"
import arrowIcon from "../../assets/icons/arrow.png"
import heroImg from "../../assets/rightImg2.png"

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
        <div className='hero-latest-button'>
          <div>Latest collection</div>
          <img src={arrowIcon} alt="arrowIcon" />
        </div>
      </div>

      <div className='hero-right'>
        <img src={heroImg} alt="heroImg" />
      </div>
    </div>
  )
}

export default Hero