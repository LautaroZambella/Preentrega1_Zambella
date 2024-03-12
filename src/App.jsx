import Navbar from "./components/NavBar/Navbar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailcontainer/ItemDetailContainer"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Footer from "./components/Footer/Footer"
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element = {<ItemListContainer  salud="¡Bienvenido a Sofa Studio!" />} />
          <Route path="/category/:categoryId" element= {<ItemListContainer  salud="¡Bienvenido a Sofa Studio!" />}/>
          <Route path ="/item/:itemId" element ={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>
        <Footer />
    </>
  )
}

export default App
