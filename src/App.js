import { useState, useEffect, Fragment } from "react";
import SearchBox from "./components/SearchBox";
import Loader from "./components/Loader";
import Cards from "./components/Cards";
import searchGifs, { trendingGifs } from './helpers/fetchs';
import { Flex } from '@chakra-ui/react';

function App() {
  const [gifData, setGifData] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    initialSearch();
  }, []);

  const initialSearch = async () => {
    try {
      const gifs = await trendingGifs();
      setGifData(gifs);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  const handleSearchGifs = async (text) => {
    try {
        setIsLoading(true);
        const gifs = await searchGifs(text);
        console.log(text)
        setGifData(gifs);
        setIsLoading(false);
    } catch (error) {
        console.log(error.message)
    }
};

  return (
    <>
      <h1>Giphy Challenge ADV JS Study Group</h1>
      <SearchBox placeholder={"Search GIPHY"} onSubmit={handleSearchGifs} />
      <Flex direction='column' align='center'>
        {isLoading ? (
          <Loader/>
        ) : (
          <Cards data={gifData} />
        )}
      </Flex>
    </>
  );
}

export default App;
