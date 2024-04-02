import { useState, useEffect } from "react"
// import {getProducts, getProductsByCategory} from "../../asyncMock"
import classes from "./ItemListContainer.module.css"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import { getDocs, collection, query, where } from "firebase/firestore"
import {db} from "../../services/firebase/firebaseConfig.js"

const ItemListContainer = ({salud}) => {
    const [products, setProducts] = useState()
    const {categoryId} = useParams()

    useEffect(() => {

        const productsCollection = categoryId ? query(collection(db, "products"), where("category", "==", categoryId)) : collection(db, "products")
        

        getDocs(productsCollection)
            .then(querySnapshot => {
                const productsAdapted = querySnapshot.docs.map(doc => {
                    const data = doc.data()
                    return {
                        id: doc.id,
                        ...data
                    }
                })
                setProducts(productsAdapted)
                }).catch(
                console.log("error")
            )
        // const ejecFunc = categoryId ? getProductsByCategory : getProducts

        // ejecFunc(categoryId)
        // .then(reslut => {
        //     setProducts(reslut)
        // })
        // .catch(error => {
        //     console.log(error)
        // })
    }, [categoryId])
    
    return (
        <div className={classes.container}>
            <h1 className={classes.mensaje}>{salud}</h1>
            <ItemList products={products} />
        </div>
    )
}
export default ItemListContainer