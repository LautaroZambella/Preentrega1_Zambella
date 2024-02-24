import CartWidget from "../CartWidget/CartWidget"
import Anchors from "../Anchors/Anchors"
import classes from "./Navbar.module.css"


const Navbar = () => {
    console.log(classes)
    return (
        <>
        <header className= {classes.header} >
                <h1 className={classes.titulo}>Sofa Studio</h1>
            <nav className= {classes.Navbar}>
                <Anchors text ="SILLAS" link="https://www.youtube.com/"></Anchors>
                <Anchors text ="SILLONES" link="https://www.youtube.com/"></Anchors>
                <Anchors text ="PUFS" link="https://www.youtube.com/"></Anchors>
            </nav>
            <CartWidget />
        </header>
        
        </>
    )
}

export default Navbar