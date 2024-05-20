import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import ShopContextProvider from "./Context/ShopContext"
import Navbar from "./components/Navbar/Navbar"
import Shop from "../src/pages/Shop/Shop"
import ShopCategory from "../src/pages/ShopCategory/ShopCategory"
import Product from "../src/pages/Product/Product"
import Cart from "../src/pages/Cart/Cart"
import LoginSignup from "../src/pages/LoginSignup/LoginSignup"
import Footer from "./components/Footer/Footer"
import './App.css'
import men_banner from "./assets/banner_mens.png"
import women_banner from "./assets/banner_women.png"
import kid_banner from "./assets/banner_kids.png"

function App() {

  return (
    <div className='App'>
      <ShopContextProvider>
      <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Shop/>}/>
        <Route path="/mens" element={<ShopCategory banner={men_banner} category="men"/>}/>
        <Route path="/womens" element={<ShopCategory banner={women_banner} category="women"/>}/>
        <Route path="/kids" element={<ShopCategory banner={kid_banner} category="kid"/>}/>
        <Route path="/product" element={<Product/>}>
          <Route path=":productId" element={<Product/>}/>
        </Route>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/login" element={<LoginSignup/>}/>
      </Routes>
      <Footer/>
      </Router>
      </ShopContextProvider>
    </div>
  )
}

export default App
