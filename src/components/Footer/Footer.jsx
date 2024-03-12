import Anchors from "../Anchors/Anchors"
import classes from "./Footer.module.css"

const Footer = () => {
    return (
        <div className={classes.container}>
            <Anchors className={classes.personal} text ="Github personal" link ="https://github.com/LautaroZambella" />
            <img src="https://img.freepik.com/premium-vector/sketch-chair-contours-white-background_566661-15584.jpg" alt="silla dibujada" />
        </div>
    )
}

export default Footer