import { useContext, useState } from "react"
import { CartContext } from "../CartContext/CartContext"
import {query, where, collection, documentId, getDocs, writeBatch, addDoc} from "firebase/firestore"
import {db} from "../../services/firebase/firebaseConfig.js"
const Checkout = () => {

    
    const {cart} = useContext(CartContext)
    
    const [nombre, setNombre] = useState(" ")
    const [apellido, setApellido] = useState(" ")
    const [correo, setCorreo] = useState(" ")


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
                buyer: userInfo,
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

    const handleOnSubit = (e) => {
        e.preventDefault()
        generateOrder({nombre, apellido, correo})
        setNombre  ("")
        setApellido("")
        setCorreo("")
        console.log ({nombre, apellido, correo})
    }

    return (
        <div>
            <h1>HOLA</h1>
            <h3>HCAER EL FORMS</h3>
            <form onSubmit={handleOnSubit}>
                <input type="text" placeholder="Ingrese su nombre" name="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)}/>
                <input type="text" placeholder="Ingrese su apellido" name="apellido" value={apellido} onChange={(e) => setApellido(e.target.value)}/>
                <input type="text" placeholder="Ingrese su mail" name="correo" value={correo} onChange={(e) => setCorreo(e.target.value)}/>
                <button type ="submit" >GENERATE ORDEN</button>
            </form>
        </div>       
    )
}

export default Checkout