import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { getGifById } from '../../helpers/fetchs';
import { Box, CircularProgress, CircularProgressLabel } from '@chakra-ui/react';

const Detail = () => {
    const { state } = useLocation();
    const [{ title, url }, setData] = useState({ title: "title", url: "url" });
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        if (state) {
            setData(state)
            setIsLoading(false);
        } else {
            fetchMissingData()
        }
    }, [state]);

    const fetchMissingData = async () => {
        try {
            setIsLoading(true);
            const id = location.pathname.split("/")[2];
            const response = await getGifById(id);
            const { title, images: { downsized: { url } } } = response;
            setData({ title, url })
            setIsLoading(false);
        } catch (error) {
            console.log(error.message)
        }
    };

    if (isLoading) {
        return (
            <Box height={'100vh'}>
                <CircularProgress isIndeterminate mt={'10rem'} size='100px' color='pink'>
                    <CircularProgressLabel>Loading...</CircularProgressLabel>
                </CircularProgress>
            </Box>
        )
    }
    return (
        <>
            <h1> {title}</h1>
            <div><img src={url} alt={title} /></div>
        </>
    )
};

export default Detail;