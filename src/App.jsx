import { Outlet } from "react-router";
import { useState } from "react";
import NavBar from "./componets/NavBar";
import Footer from "./componets/Footer";

function App() {

  const [cart, setCart] = useState([]);

  const addToCart = (title, price, quant, img, description) => {
    if (!quant || quant <= 0) return;
    const item = {
      img: img,
      title: title,
      price: price,
      quant: quant,
      description: description,
    }

    setCart(c => [...c, item]);
  }

  const removeCartItem = (titleToRemove) => {
    setCart(cart.filter(item => item.title !== titleToRemove));
  }

  return (
    <>
      <NavBar cart={cart} />
      <Outlet context={{cart, addToCart, removeCartItem}} />
      <Footer />
    </>
  )
}

export default App
