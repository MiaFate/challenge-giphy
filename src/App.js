import { useState, useEffect } from "react";
import SearchBox from "./components/SearchBox";
import Cards from "./components/Cards";
import { trendingGifs } from './helpers/fetchs'
function App() {
  const [gifData, setGifData] = useState('');

  useEffect(() => {
    initialSearch();
  }, []);

  const initialSearch = async () => {
    try {
      const gifs = await trendingGifs();
      setGifData(gifs);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h1>Giphy Challenge ADV JS Study Group</h1>
      <SearchBox placeholder={"Search GIPHY"} setData={setGifData} />
      <Cards data={gifData} />
    </>
  );
}

export default App;
