import { useState, useEffect } from "react"
import {getProducts} from "../../asyncMock"
import classes from "./ItemListContainer.module.css"
import ItemList from "../ItemList/ItemList"

const ItemListContainer = ({salud}) => {
    const [products, setProducts] = useState()
    useEffect(() => {
        getProducts()
        .then(reslut => {
            setProducts(reslut)
        })
        .catch(error => {
            console.log(error)
        })
    }, [])
    return (
        <div className={classes.container}>
            <h1 className={classes.mensaje}>{salud}</h1>
            <ItemList products={products} />
        </div>
    )
}
export default ItemListContainer