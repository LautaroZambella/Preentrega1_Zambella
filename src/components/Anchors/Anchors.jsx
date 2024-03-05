import classes from "./Anchors.module.css"


const Anchors = ({link, text, className}) => {
    return (
        <>
            <a className={`${classes.hola} ${className}`} href={link} target="_blank">{text}</a>
        </>
    )
}

export default Anchors