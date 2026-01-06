import { Outlet } from "react-router";
import { useState } from "react";
import NavBar from "./componets/NavBar";
import Footer from "./componets/Footer";

function App() {

  const [cart, setCart] = useState([]);

  const addToCart = (title, price, quant) => {
    const item = {
      title: title,
      price: price,
      quant: quant,
    }

    setCart(c => [...c, item]);
  }

  return (
    <>
      <NavBar />
      <Outlet context={{cart, addToCart}} />
      <Footer />
    </>
  )
}

export default App
