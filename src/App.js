import { useState, useEffect } from "react";
import SearchBox from "./components/SearchBox";
import Cards from "./components/Cards";
import { trendingGifs } from './helpers/fetchs'
import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react'
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

  return (
    <>
      <h1>Giphy Challenge ADV JS Study Group</h1>
      <SearchBox placeholder={"Search GIPHY"} setData={setGifData} setIsLoading={setIsLoading} />
      
      {isLoading? (
        <CircularProgress isIndeterminate size='100px' >
          <CircularProgressLabel>Loading...</CircularProgressLabel>
        </CircularProgress>
        ) : (
          <Cards data={gifData} />
        ) }
      
    </>
  );
}

export default App;
