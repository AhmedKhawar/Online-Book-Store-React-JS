import {About} from "./pages/about"
import {Login} from "./pages/login"
import {Books} from "./pages/books"
import { Navbar } from "./Common Components/navbar";
import { Footer } from "./Common Components/footer";
import { Detail } from "./pages/detailPage";
import { Home } from "./pages/home";
import { Cart } from "./pages/cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { Prayer } from "./pages/prayerAPI";


function App() {
  const [cartItems, setCartItems] = useState([]);
  return (
    <>
    <BrowserRouter>
        <Navbar cartCount = {cartItems.length}/>
      <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/about" element={<About />} />
       <Route path="/books" element={<Books cartItems={cartItems} setCartItems={setCartItems}/>}/>
       <Route path="/login" element={<Login />} />
       <Route path="/detail/:id" element={<Detail cartItems={cartItems} setCartItems={setCartItems}/>} />
       <Route path="/cart" element={<Cart cartItems={cartItems} setCartItems={setCartItems} />} />
       <Route path="/prayer" element={<Prayer/>} />
      </Routes>
        <Footer />
  </BrowserRouter>
    </>
  )
}

export default App
