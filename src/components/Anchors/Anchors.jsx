
const Anchors = (links) => {
    return (
        <>
            <a href={links.link} target="_blank">{links.text}</a>
        </>
    )
}

export default Anchors