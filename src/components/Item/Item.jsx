import classes from "./Item.module.css"
import Anchors from "../Anchors/Anchors"
import { Link } from "react-router-dom"

const Item = ({id, name, img, price}) => {
    return (
        <div className={`${classes.container}`}>
            <img className={`${classes.imagen}`} src={img}/>
            <h2>{name}</h2>
            <h3>{price}</h3>
            <Link className={`${classes.detalle}`} to ={`/item/${id}`}>Ver detalle</Link>
        </div>
    )
}

export default Item