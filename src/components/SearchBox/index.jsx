import React,{useState} from 'react';
import { Stack, IconButton, Input } from '@chakra-ui/react';

function SearchBox({ placeholder, setText}) {

const [inputValue, setInputValue]=useState("")
    

    const handleChange = (e) => {
        const input = e.target.value.toLowerCase();
        setInputValue(input);
    };
    const handleSubmit= (e) => {
        e.preventDefault();
        setText(inputValue);
    };
    
    return (
        <Stack direction='row' justify='center'>
            <form id="formSearch" onSubmit={handleSubmit}>
                <IconButton type="submit" aria-label='Search Gifs' bg={'pink.400'} _hover={{ bg: "cyan.200" }} icon={<i className="bi bi-search-heart"></i>}></IconButton>
                <Input width='auto' type="text" id="searchBox" placeholder={placeholder} onChange={handleChange} value={inputValue} ></Input>
            </form>
        </Stack>
    )
}

export default SearchBox;