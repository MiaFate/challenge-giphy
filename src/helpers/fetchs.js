async function searchGifs(query="") {
    try {
        const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${process.env.REACT_APP_APIKEY}&q=${query}&limit=25&offset=0&rating=g&lang=es`);
        const { data } = await response.json();
        return await data;
    } catch (error) {
        console.log(error.message);
    }
}
async function trendingGifs() {
    try {
        const response = await fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${process.env.REACT_APP_APIKEY}&limit=25&rating=g`);
        const { data } = await response.json();
        return await data;
    } catch (error) {
        console.log(error.message);
    }
}

export{
    searchGifs as default,
    trendingGifs,
}