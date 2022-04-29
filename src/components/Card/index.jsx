import React from 'react'

const Card = ({ gif }) => {
    const { title, images: { downsized: { height, width, url } } } = gif;

    return (
        <img className={width > height ? "landscape" : "portrait"} src={url} alt={title} />
    )
}
export default Card;