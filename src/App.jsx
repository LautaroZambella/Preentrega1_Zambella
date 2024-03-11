import Navbar from "./components/NavBar/Navbar"
// import Button from './components/Button/Button'
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemCount from "./components/ItemCount/ItemCount"
import ItemDetailContainer from "./components/ItemDetailcontainer/ItemDetailContainer"
import './App.css'

function App() {

  return (
    <>
      <Navbar />
      <ItemListContainer  salud="¡Bienvenido a Sofa Studio!" />
      {/* <ItemCount initial = {1} stock = {10} onAdd = {(quantity) => console.log("cantidad agregada ", quantity)} /> */}
      <ItemDetailContainer />
    </>
  )
}

export default App
