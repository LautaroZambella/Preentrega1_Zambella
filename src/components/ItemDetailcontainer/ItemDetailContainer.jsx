import classes from "./ItemDetailContainer.module.css"
import { useState, useEffect } from "react";
import {getProductById} from "../../asyncMock"
import ItemDetail from "../ItemDetail/ItemDetail"

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)

    useEffect(() => {
        getProductById("1")
        .then(response => {
            setProduct(response)
        })
        .catch(error => {
            console.log(error)
        })
    }, [])

    return(
        <div className={`${classes.container}`}>
            <ItemDetail {...product}/>
        </div>
    )
}

export default ItemDetailContainer