import React, { useState } from 'react';
import searchGifs from '../../helpers/fetchs';
import { Stack, IconButton, Input } from '@chakra-ui/react'

function SearchBox({ placeholder, setData, setIsLoading }) {

    const [text, setText] = useState("");
    
    const handleChange = (e) => {
        const input = e.target.value.toLowerCase();
        setText(input);
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            setIsLoading(true);

            const gifs = await searchGifs(text);
            setData(gifs);
            setIsLoading(false);
        } catch (error) {
            console.log(error.message)
        }
    }

    return (
        <Stack direction='row' justify='center'>
            <form id="formSearch" onSubmit={handleSubmit}>
                <IconButton type="submit" aria-label='Search Gifs' colorScheme='cyan' icon={<i className="bi bi-search-heart"></i>}></IconButton>
                <Input width='auto' type="text" id="searchBox" placeholder={placeholder} onChange={handleChange} value={text} ></Input>
            </form>
        </Stack>
    )
}

export default SearchBox