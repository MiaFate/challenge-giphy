import { Image, Flex } from '@chakra-ui/react';
import React from 'react'

const Card = ({ gif }) => {
    const { title, images: { downsized: { height, width, url } } } = gif;

    return (
        <Flex direction='column' justify='start' align='center' textAlign='center'>
                <Image className={width > height ? "landscape" : "portrait"} src={url} alt={title} />
                <p>{title}</p>
        </Flex>
    )
}
export default Card;