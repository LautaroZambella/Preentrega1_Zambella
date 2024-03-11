import carrito from "./assets/_carrito.png"
import classes from "./CartWidget.module.css"

const CartWidget = ()=> {
    return (
        <div className={`${classes.carrito}`}>
            <img src= {carrito} alt="Carrito" />
            0
        </div>
    )
}
export default CartWidget