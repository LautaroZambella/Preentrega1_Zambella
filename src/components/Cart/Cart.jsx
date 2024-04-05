import classes from "../Cart/Cart.module.css"
import InsideCart from "../InsideCart/InsideCart.jsx"
import { useContext, useState } from "react"
import { CartContext } from "../CartContext/CartContext.jsx"
import { Link } from "react-router-dom"

const Cart = () => {
    // let notEmpty = false 
    const {cart} = useContext(CartContext)
    const [notEmpty, setnotEmpty] = useState(cart != [] ? true : false)
    

    const totalPriceCalculator = (cart) => {
        let contador = 0
        cart.forEach(element => {
          contador = contador + element.quantity * element.price
        });
        return contador
      }

    const totalPrice = totalPriceCalculator(cart)
    


    return (
        <div className={`${classes.container}`}>
            {notEmpty ? (
                cart.map((product) => (
                    <InsideCart key={product.id} {...product} />
                )) 
            ) : (
                <Link  to = "/">Sofa Studio</Link>
            )}
            <div>
                 { notEmpty ? <Link to ="/checkout">Checkout</Link> : <h2>No hay productos</h2>}
                <p>El precio total de su compre es: ${totalPrice}</p> 
            </div>
           


        </div>
    )
}

export default Cart