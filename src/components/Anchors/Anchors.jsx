import  "./Anchors.module.css"


const Anchors = (links) => {
    console.log(links)
    return (
        <>
            <a  className={links.clase} href={links.link} target="_blank">{links.text}</a>
        </>
    )
}

export default Anchors