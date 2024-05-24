import React from 'react'
import "./Offers.css"
import exclusiveImg from "../../assets/rightImg3.png"

const Offers = () => {
  return (
    <div className='offers'>
      <div className='offers-left'>
        <h1>Exclusive</h1>
        <h1>Offers for you</h1>
        <button>Check Now</button>
      </div>
      <div className='offers-right'>
        <img src={exclusiveImg} alt="" />
      </div>
    </div>
  )
}

export default Offers