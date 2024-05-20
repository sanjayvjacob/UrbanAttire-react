import React,{useContext, useRef, useState} from 'react'
import "./Navbar.css"
import Logo from "../../assets/logo.png"
import cartIcon from "../../assets/icons/shopping_cart.png"
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'
import navDropdownIcon from "../../assets/icons/nav_dropdown.png"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Navbar = () => {
const [menu, setMenu] = useState("shop")
const {getTotalCartItems} = useContext(ShopContext)
const menuRef = useRef()

const dropDownToggle = (e) =>{
menuRef.current.classList.toggle("nav-menu-visible")
e.target.classList.toggle("open")
}

  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={Logo} alt="nav-logo" />
        <Link style={{textDecoration:"none"}} to="/"><p>UrbanAttire</p></Link>
      </div>
      <img className="nav-dropdown" src={navDropdownIcon} onClick={dropDownToggle} alt="" />
      <ul ref={menuRef} className='nav-menu'>
        <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration:"none", color:"#fff"}} to="/">Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("mens")}}><Link style={{textDecoration:"none", color:"#fff"}} to="/mens">Men</Link>{menu==="mens"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("womens")}}><Link style={{textDecoration:"none", color:"#fff"}} to="/womens">Women</Link>{menu==="womens"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("kids")}}><Link style={{textDecoration:"none", color:"#fff"}} to="/kids">Kids</Link>{menu==="kids"?<hr/>:<></>}</li>
      </ul>
      <div className='nav-login-cart'>
        <Link to="/login"><button>Login</button></Link>
        <Link to="/cart"><ShoppingCartIcon style={{textDecoration:"none", color:"#fff", fontSize:"35px"}}/></Link>
        <div className='nav-cart-count'>{getTotalCartItems()}</div>
      </div>
    </div>
  )
}

export default Navbar