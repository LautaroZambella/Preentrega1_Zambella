import classes from "./ItemDetail.module.css"
import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({id, name, img, category, description, price, stock}) => {
    return (
        <article className={`${classes.container}`}>
            <header>
                <h2>{name}</h2>
            </header>
            <img className={`${classes.imagen}`} src={img} alt={name} />
            <section className={`${classes.seccion}`}>
                <p>Categoria: {category}</p>
                <p>Descripcion: {description}</p>
                <p>Precio: {price}</p>
            </section>
            <footer>
                <ItemCount initial={1} stock = {stock} onAdd={(quantity) => console.log(quantity)} />
            </footer>
        </article>
    )
}

export default ItemDetail