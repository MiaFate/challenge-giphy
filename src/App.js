import { useState, useEffect, Fragment, lazy } from "react";
import SearchBox from "./components/SearchBox";
//import Loader from "./components/Loader";
const Cards = lazy(() => import("./components/Cards"));
import searchGifs, { trendingGifs } from './helpers/fetchs';
import { Flex } from '@chakra-ui/react';
import { useNavigate } from "react-router-dom";
//import { ErrorBoundary } from "react-error-boundary";
import { ErrorBoundary, useErrorHandler } from "react-error-boundary";

function App() {
  const handleError = useErrorHandler()
  const [gifData, setGifData] = useState([]);
  const navigate = useNavigate();
  
  useEffect(() => {
    if (localStorage.getItem("logged") === "true") {
      initialSearch();
    }else{
      navigate("/");
    }
  }, []);  

  const initialSearch = async () => {
    try {
      const gifs = await trendingGifs();
      setGifData(gifs);
    } catch (error) {
      console.log(error);
    }
  };
  const handleSearchGifs = async (text) => {
      const gifs = await searchGifs(text);
      console.log(text)
      setGifData(gifs);
      error=>handleError(error)  
  };
  const ErrorFallback = ({error}) => {
    console.log(error)
    return(
      <Flex justifyContent="center" alignItems="center" height="100vh">
        <h1>{`${error}`}</h1>
      </Flex>
    )
  }

    return (
      <>
        <h1>Giphy Challenge ADV JS Study Group</h1>
        <SearchBox placeholder={"Search GIPHY"} onSubmit={handleSearchGifs} />
        <Flex direction='column' align='center'>
          <ErrorBoundary FallbackComponent={ErrorFallback}>
          <Cards data={gifData} />     
          </ErrorBoundary>
        </Flex>
      </>
    );

}

export default App;
