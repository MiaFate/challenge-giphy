import React, { useState } from 'react'



function SearchBox({ placeholder }) {
    const [text, setText] = useState("");

    const handleChange = (e) => {
        const input = e.target.value.toLowerCase();
        setText(input);
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const gifs = await fetchGifs(text);
            console.log(gifs);
        } catch (error) {
            console.log(error.message)
        }
    }

    async function fetchGifs(query) {
        try {
            const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${process.env.REACT_APP_APIKEY}&q=${query}&limit=25&offset=0&rating=g&lang=es`);
            const { data } = await response.json();
            return await data;
        } catch (error) {
            console.log(error.message);
        }

    }
    return (
        <form id='searchBox' onSubmit={handleSubmit}>
            <button><i className="bi bi-search-heart"></i></button>
            <input type="text" id="searchBox" placeholder={placeholder} onChange={handleChange} value={text} ></input>
        </form>
    )
}

export default SearchBox