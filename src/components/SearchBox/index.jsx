import React, { useState } from 'react';
import searchGifs from '../../helpers/fetchs';
import { Stack, IconButton, Input } from '@chakra-ui/react'

function SearchBox({ placeholder, setData }) {

    const [text, setText] = useState("");
    const handleChange = (e) => {
        const input = e.target.value.toLowerCase();
        setText(input);
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const gifs = await searchGifs(text);
            setData(gifs);
        } catch (error) {
            console.log(error.message)
        }
    }

    return (
        <form id="formSearch" onSubmit={handleSubmit}>
            <Stack direction='row' justify='center'>
                <IconButton aria-label='Search Gifs' colorScheme='cyan' icon={<i className="bi bi-search-heart"></i>}></IconButton>
                <Input width='auto' type="text" id="searchBox" placeholder={placeholder} onChange={handleChange} value={text} ></Input>
            </Stack>
        </form>
    )
}

export default SearchBox