import React from 'react'
import { Box, CircularProgress, CircularProgressLabel } from '@chakra-ui/react';

const Loader = () => {
    return (
        <Box height={'100vh'}>
            <CircularProgress isIndeterminate mt={'10rem'} size='100px' color='pink'>
                <CircularProgressLabel>Loading...</CircularProgressLabel>
            </CircularProgress>
        </Box>
    )
}

export default Loader