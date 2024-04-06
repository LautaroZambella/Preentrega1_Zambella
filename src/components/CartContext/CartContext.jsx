import { useState, createContext } from "react"

export const CartContext = createContext(1)

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])
    
    const añadirItem = (toAdd) => {
      if (yaEsta(toAdd.id)) {
         console.error("NANOANOANOANOA")
      } else {
        setCart(prev => [...prev, toAdd])
      }
    }

    const yaEsta = (id) => {
      if (cart.some(prod => prod.id == id)) {
        return true
      } else {
        return false
      }
    }
    
    const vaciarCarrito = () => {
        setCart([])
      }

      const removeItem = (id) => {
        
        const updatedCart = cart.filter(prod => prod.id !== id)
        setCart(updatedCart)
        
      }

  

    return (
        <CartContext.Provider value={{cart, añadirItem, vaciarCarrito, removeItem, yaEsta}}>
            {children}
        </CartContext.Provider>
    )
}

