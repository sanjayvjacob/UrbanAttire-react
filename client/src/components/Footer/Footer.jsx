import React from 'react'
import "./Footer.css"
import footerLogo from "../../assets/logo_big.png"
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import FacebookIcon from '@mui/icons-material/Facebook';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-logo'>
        <img src={footerLogo} alt="" />
        <p style={{color:"#fff"}}>UrbanAttire</p>
      </div>
      <ul className='footer-links'>
        <li>Company</li>
        <li>Product</li>
        <li>Offices</li>
        <li>Product</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className='footer-social-icon'>
        <div className='footer-icons-container'>
        <InstagramIcon style={{color:"#fff", fontSize:"30px"}}/>
        </div>
        <div className='footer-icons-container'>
        <PinterestIcon style={{color:"#fff", fontSize:"30px"}}/>
        </div>
        <div className='footer-icons-container'>
        <FacebookIcon style={{color:"#fff", fontSize:"30px"}}/>
        </div>
      </div>
      <div className='copyright'>
        <hr />
        <p>Copyright @ 2024 - All Right Reserved.</p>
      </div>
    </div>
  )
}

export default Footer