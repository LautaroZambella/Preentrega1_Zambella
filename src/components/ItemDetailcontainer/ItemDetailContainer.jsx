import classes from "./ItemDetailContainer.module.css"
import { useState, useEffect } from "react";
import {getProductById} from "../../asyncMock"
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail"

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)

    const {itemId} = useParams()

    useEffect(() => {
        getProductById(itemId)
        .then(response => {
            setProduct(response)
        })
        .catch(error => {
            console.log(error)
        })
    }, [itemId])

    return(
        <div className={`${classes.container}`}>
            <ItemDetail {...product}/>
        </div>
    )
}

export default ItemDetailContainer