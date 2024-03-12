import { useState, useEffect } from "react"
import {getProducts, getProductsByCategory} from "../../asyncMock"
import classes from "./ItemListContainer.module.css"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"

const ItemListContainer = ({salud}) => {
    const [products, setProducts] = useState()
    const {categoryId} = useParams()
    useEffect(() => {

const ejecFunc = categoryId ? getProductsByCategory : getProducts

        ejecFunc(categoryId)
        .then(reslut => {
            setProducts(reslut)
        })
        .catch(error => {
            console.log(error)
        })
    }, [categoryId])
    
    return (
        <div className={classes.container}>
            <h1 className={classes.mensaje}>{salud}</h1>
            <ItemList products={products} />
        </div>
    )
}
export default ItemListContainer