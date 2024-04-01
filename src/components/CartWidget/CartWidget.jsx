import carrito from "./assets/_carrito.png"
import classes from "./CartWidget.module.css"
import { useContext } from "react"
import { CartContext } from "../CartContext/CartContext"
import { useNavigate } from "react-router-dom"

const CartWidget = () => {
    const {cart} = useContext(CartContext)

    let navigate = useNavigate()

    const handleOnClick = () => {
      navigate("/cart")
    }

    const totalQuantityCalculator = (cart) => {
        let contador = 0
        cart.forEach(element => {
          contador = contador + element.quantity
        });
        return contador
      }

      const totalQuantity = totalQuantityCalculator(cart)

    return (
        <div className={`${classes.carrito}`}>
            <img src= {carrito} onClick={handleOnClick} alt="Carrito" />
            {totalQuantity}
        </div>
    )
}
export default CartWidget