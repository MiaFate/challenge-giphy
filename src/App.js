import { useState, useEffect } from "react";
import SearchBox from "./components/SearchBox";
import Cards from "./components/Cards";
import { trendingGifs } from './helpers/fetchs';
import { Box, CircularProgress, CircularProgressLabel, Flex } from '@chakra-ui/react';

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
    };
  };

  return (
    <>
      <h1>Giphy Challenge ADV JS Study Group</h1>
      <SearchBox placeholder={"Search GIPHY"} setData={setGifData} setIsLoading={setIsLoading} />
      <Flex direction='column' align='center'>
        {isLoading ? (
          <Box height={'100vh'}>
            <CircularProgress isIndeterminate mt={'10rem'} size='100px' color='pink'>
              <CircularProgressLabel>Loading...</CircularProgressLabel>
            </CircularProgress>
          </Box>
        ) : (
          <Cards data={gifData} />
        )}
      </Flex>
    </>
  );
};

export default App;
