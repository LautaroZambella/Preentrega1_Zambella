import classes from "./ItemDetail.module.css"
import ItemCount from "../ItemCount/ItemCount"
import { useState, useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../CartContext/CartContext"

const ItemDetail = ({id, name, img, category, description, price, stock}) => {
    const [quantity, setQuantity] = useState(0)
    const {añadirItem} = useContext(CartContext) 
    const {vaciarCarrito} = useContext(CartContext)

    const bothFunctions = () => {
        vaciarCarrito()
        setQuantity(0)
        console.log("Se llamaron ambas funciones")
    }

    const onAdd = (quantity) => {
        const objPorAñadir = {
            id, name, price, quantity, img
        }
        setQuantity(quantity)
        añadirItem(objPorAñadir)
    }




    return (
        <article className={`${classes.container}`}>
            <header>
                <h2>{name}</h2>
            </header>
            <img className={`${classes.imagen}`} src={img} alt={name} />
            <section className={`${classes.seccion}`}>
                <p>Categoria: {category}</p>
                <p>Descripcion: {description}</p>
                <p>Precio: {price}</p>
            </section>
            <footer>
                {
                    quantity > 0 ? (<Link className={`${classes.finalizar}`} to="/cart">Finalizar compra</Link>)
                    : (<ItemCount initial={1} stock = {stock} onAdd= {onAdd} />)
                }
            </footer>
            <button className={`${classes.boton}`} onClick={bothFunctions}>Vaciar carrito</button>
        </article>
    )
}

export default ItemDetail