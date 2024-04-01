import classes from "../InsideCart/InsideCart.module.css"
import { useContext } from "react"
import { CartContext } from "../CartContext/CartContext.jsx"

const InsideCart = ({ name, img, price, quantity, id}) => {

    return (
        <div className={`${classes.container}`}> 
            <img className={`${classes.imagen}`} src={img}/>
            <h2>{name}</h2>
            <h3>{price}</h3>
            <h3>{quantity}</h3>
            <button onClick={console.log("hola")}>Remover este producto</button>
        </div>
    )
}

export default InsideCart