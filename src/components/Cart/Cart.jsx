import classes from "../Cart/Cart.module.css"
import InsideCart from "../InsideCart/InsideCart.jsx"
import { useContext } from "react"
import { CartContext } from "../CartContext/CartContext.jsx"

const Cart = () => {
    const {cart} = useContext(CartContext)
    let cartCheck = false
    if (cart == []) {
        cartCheck = false
    } else if (cart != []) {
        cartCheck = true
    }
    return (
        <div className={`${classes.container}`}>
            {cartCheck ? (
                cart.map((product) => (
                    <InsideCart key={product.id} {...product} />
                ))
            ) : (
                <Link  to = {"/"}>Sofa Studio</Link>
            )}
        </div>
    )
}

export default Cart