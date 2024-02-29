import CartWidget from "../CartWidget/CartWidget"
import Anchors from "../Anchors/Anchors"
import classes from "./Navbar.module.css"


const Navbar = () => {
    console.log(classes)
    console.log(classes.primero)
    return (
        <>
        <header className= {classes.header} >
                <h1 className={classes.titulo}>Sofa Studio</h1>
            <nav className= {classes.Navbar}>
                <Anchors  clase ="adios" text ="SILLAS" link="https://www.google.com/search?sca_esv=7569b3261be45716&hl=es-419&sxsrf=ACQVn09Lj6T03F6VeTEuPAfEkto3-wRdWA:1708874750244&q=sil
                las&tbm=isch&source=lnms&sa=X&ved=2ahUKEwj6q9DD5saEAxVLqJUCHXIAD_QQ0pQJegQIDxAB&biw=1920&bih=953&dpr=1"></Anchors>
                <Anchors  clase ="hola" text ="SILLONES" link="https://www.google.com/search?q=sillones&tbm=isch&ved=2ahUKEwjg8Y_H5saEAxV8W7gEHXZtDeoQ2-cCegQIABAA&oq=sillones&gs_lp=EgNpbWciCHNpbGxvbmVzMgQQIxgnMg
                QQIxgnMg0QABiABBiKBRhDGLEDMgoQABiABBiKBRhDMgoQABiABBiKBRhDMgoQABiABBiKBRhDMgoQABiABBiKBRhDMgoQABiABBiKBRhDMgUQABiABDIFEAAYgARIzhFQrwZYtBBwAHgAkAEAmAHcAaAB_QaqAQU4LjAuMbgBA8gBAPgBAYoCC2d
                3cy13aXotaW1niAYB&sclient=img&ei=BVzbZaDbIvy24dUP9tq10A4&bih=953&biw=1920&hl=es-419"></Anchors>
                <Anchors  clase ="mesa" text ="PUFS" link="https://www.google.com/search?q=pufs&tbm=isch&ved=2ahUKEwiJ-K_W5saEAxW8WLgEHRegBGgQ2-cCegQIABAA&oq=pufs&gs_lp=EgNpbWciBHB1ZnMyBRA
                AGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAESLwOUIUHWL4NcAB4AJABAJgBV6ABmgOqAQE1uAEDyAEA-AEBigILZ3dzLXdpei1pbWfCAgQQIxgnwgIKEAAYgAQY
                igUYQ8ICCBAAGIAEGLEDiAYB&sclient=img&ei=JVzbZcnRIbyx4dUPl8CSwAY&bih=953&biw=1920&hl=es-419"></Anchors>
            </nav>
            <CartWidget />
        </header>
        
        </>
    )
}

export default Navbar