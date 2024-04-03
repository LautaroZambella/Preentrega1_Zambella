import { useContext } from "react"
import { CartContext } from "../CartContext/CartContext"
import {query, where, collection, documentId, getDocs, writeBatch, addDoc} from "firebase/firestore"
import {db} from "../../services/firebase/firebaseConfig.js"
const Checkout = () => {

    const {cart} = useContext(CartContext)

    const totalPriceCalculator = (cart) => {
        let contador = 0
        cart.forEach(element => {
          contador = contador + element.quantity * element.price
        });
        return contador
      }

      const totalPrice = totalPriceCalculator(cart)

    const generateOrder =  async (userInfo) => {
        console.log("antes del try")

        try {
            const objOrder = {
                buyer: { nombre: "Jorge"},
                items: cart,
                totalPrice
            }

            console.log("recien adentro del try")
            
            console.log (cart)

            const batch = writeBatch(db)
            const noStock = []
            const ids = cart.map(prod => prod.id)
            console.log(ids)
        
            const productsCollection = query(collection(db, "products"), where(documentId(), "in", ids ))
            
            const querySnapshot =  await getDocs(productsCollection)
            const {docs} = querySnapshot 
        
            docs.forEach(doc => {
                const data = doc.data()
                const stockDb = data.stock
        
                const productAddedCart = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productAddedCart.quantity

                if (stockDb >= prodQuantity) {
                    batch.update(doc.ref, {stock: stockDb - prodQuantity})
                } else {
                    noStock.push({id: doc.id, ...data})
                }
            })
        
            if (noStock.length === 0) {
                batch.commit()
        
                const orderCollection = collection(db, "orders")
                const {id} = await addDoc(orderCollection, objOrder)
                console.log(id)
            } else {
                console.log("No hay stock de algo")
            }

        } catch(error) {
            console.error("HUBO UN ERROR", error)
        }
        
    }

    return (
        <div>
            <h1>HOLA</h1>
            <h3>HCAER EL FORMS</h3>
            <button onClick={generateOrder}>GENERATE ORDEN</button>
        </div>       
    )
}

export default Checkout