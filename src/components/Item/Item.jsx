import classes from "./Item.module.css"
import Anchors from "../Anchors/Anchors"

const Item = ({id, name, img, price}) => {
    return (
        <div className={`${classes.container}`}>
            <img className={`${classes.imagen}`} src={img}/>
            <h2>{name}</h2>
            <h3>{price}</h3>
            <Anchors  text ="ver detalle" link="/"/>
        </div>
    )
}

export default Item