import { useContext, useState } from "react"
import { CartContext } from "../CartContext/CartContext"
import {query, where, collection, documentId, getDocs, writeBatch, addDoc} from "firebase/firestore"
import {db} from "../../services/firebase/firebaseConfig.js"
const Checkout = () => {

    
    const {cart} = useContext(CartContext)
    
    const [nombre, setNombre] = useState("")
    const [apellido, setApellido] = useState("")
    const [correo, setCorreo] = useState("")
    const [segundoCorreo, setsegundoCorreo] = useState("")
    const [numero, setNumero] = useState (0)
    const [orderNumber, setOrderNumber] = useState("")


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
                setOrderNumber(id)
            } else {
                setOrderNumber("No hay stock de algo")
            }

        } catch(error) {
            setOrderNumber("No hay stock de algo", error)
        }
        
    }

    const validacionSingular = (correo) => { 
        if (correo.indexOf("@") > -1) {
            return true
        }else {return false}

    }

    const validacionDoble = (correo1, correo2) => {
        if (correo1 == correo2) {
            return true
        }else {return false}
    }

    const validacionNumero = (num) => {
       if ((num > 0) && num.length == 10 ) {
        return true
       }else {return false}
    }

    const validacionStringvacio = (string) => {
        if (string != "") {
            return true
        }else {return false}
    }

    const handleOnSubmit = (e) => {
        e.preventDefault()
        if (validacionStringvacio(nombre) && validacionStringvacio(apellido) && validacionNumero(numero) && validacionSingular(segundoCorreo) && validacionSingular(correo) && validacionDoble(correo, segundoCorreo)) {
            console.log("TODOS LOS DATOS ESTAN BIEN PA")
            generateOrder({nombre, apellido, correo, numero})
        } else {
            console.log("revisa esos datos")
        }

        setNombre  ("")
        setApellido("")
        setCorreo("")
        setsegundoCorreo("")
        setNumero("")
        console.log ({nombre, apellido, correo, numero})
    }

    return (
        <div>
            <h1>HOLA</h1>
            <h3>HCAER EL FORMS</h3>
            <form onSubmit={handleOnSubmit}>
                <label >Ingrese su nombre</label>
                <input type="text"  name="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)}/>
                <label >Ingrese su apellido</label>
                <input type="text"  name="apellido" value={apellido} onChange={(e) => setApellido(e.target.value)}/>
                <label >Ingrese su correo</label>
                <input type="text"  name="correo" value={correo} onChange={(e) => setCorreo(e.target.value)}/>
                <label >Repita su correo</label>
                <input type="text"  name="correo" value={segundoCorreo} onChange={(e) => setsegundoCorreo(e.target.value)}/>
                <label >Ingrese su numero</label>
                <input type="number"  value={numero} onChange={(e) => setNumero(e.target.value)}/>
                <button type ="submit" >Guardar datos</button>
            </form>
            <h4>El numero de orden de su compra es: {orderNumber}</h4>
        </div>       
    )
}

export default Checkout