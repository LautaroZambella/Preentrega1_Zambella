import Navbar from "./components/NavBar/Navbar"
// import Button from './components/Button/Button'
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import './App.css'

function App() {

  return (
    <>
      <Navbar />
      <ItemListContainer  salud="¡Bienvenido a Sofa Studio!" />
    </>
  )
}

export default App
