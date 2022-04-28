import React, { useState } from 'react';
import searchGifs from '../../helpers/fetchs';

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
        <div id='searchBox'>
            <form onSubmit={handleSubmit}>
                <button><i className="bi bi-search-heart"></i></button>
                <input type="text" id="searchBox" placeholder={placeholder} onChange={handleChange} value={text} ></input>
            </form>
        </div>
    )
}

export default SearchBox