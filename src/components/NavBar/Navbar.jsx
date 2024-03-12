import CartWidget from "../CartWidget/CartWidget"
import Anchors from "../Anchors/Anchors"
import classes from "./Navbar.module.css"
import { Link } from "react-router-dom"


const Navbar = () => {
    console.log(classes)
    console.log(classes.primero)
    return (
        <>
        <header className= {classes.header} >
                <Link className={classes.titulo} to = {"/"}>Sofa Studio</Link>
            <nav className= {classes.Navbar}>
                <Link className={`${classes.silla}`} to ={"/category/silla"}>SILLAS</Link>
                <Link className={`${classes.sillon}`} to ={"/category/sillon"}>SILLONES</Link>
                <Link className={`${classes.pufs}`} to ={"/category/pufs"}>PUFS</Link>
            </nav>
            <CartWidget />
        </header>
        
        </>
    )
}

export default Navbar