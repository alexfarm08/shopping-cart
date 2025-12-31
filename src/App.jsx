import { Outlet } from "react-router";
import NavBar from "./componets/NavBar";
import Footer from "./componets/Footer";

function App() {

  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
