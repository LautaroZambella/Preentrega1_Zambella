import classes from "./ItemDetailContainer.module.css"
import { useState, useEffect } from "react";
// import {getProductById} from "../../asyncMock"
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail"
import { getDoc, doc } from "firebase/firestore";
import {db} from "../../services/firebase/firebaseConfig.js"

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)

    const {itemId} = useParams()

    useEffect(() => {
        const productDoc = doc(db, "products", itemId)
        getDoc(productDoc)
            .then(queryDocumentSnapshot => {
                const data = queryDocumentSnapshot.data()
                const productAdapted = {
                    id: queryDocumentSnapshot.id,
                    ...data
                }
                setProduct(productAdapted)
            })
            .catch()
        // getProductById(itemId)
        // .then(response => {
        //     setProduct(response)
        // })
        // .catch(error => {
        //     console.log(error)
        // })
    }, [itemId])

    return(
        <div className={`${classes.container}`}>
            <ItemDetail {...product}/>
        </div>
    )
}

export default ItemDetailContainer