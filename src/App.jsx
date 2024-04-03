import Navbar from "./components/NavBar/Navbar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailcontainer/ItemDetailContainer"
import Cart from "./components/Cart/Cart"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import {CartProvider} from "./components/CartContext/CartContext"
import Footer from "./components/Footer/Footer"
import Checkout from "./components/Checkout/Checkout"
import './App.css'


  

    function App() {
    


  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element = {<ItemListContainer  salud="¡Bienvenido a Sofa Studio!" />} />
            <Route path="/category/:categoryId" element= {<ItemListContainer  salud="¡Bienvenido a Sofa Studio!" />}/>
            <Route path ="/item/:itemId" element ={<ItemDetailContainer />} />
            <Route path ="/cart" element ={<Cart/>} />
            <Route path ="/checkout" element ={<Checkout/>} />
          </Routes>
        </BrowserRouter>
        </CartProvider>
      <Footer />
    </>
  )
}

export default App
