import classes from "./ItemListContainer.module.css"

const ItemListContainer = (saludo) => {
    return (
        <div>
            <h1 className={classes.mensaje}>{saludo.salud}</h1>
        </div>
    )
}
export default ItemListContainer