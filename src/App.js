import { useState, useEffect } from "react";
import SearchBox from "./components/SearchBox";
import Cards from "./components/Cards";
import { trendingGifs } from './helpers/fetchs'
function App() {
  const [data, setData] = useState('');

  useEffect(() => {
    initialSearch();
  }, []);

  const initialSearch = async () => {
    try {
      const gifs = await trendingGifs();
      setData(gifs);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <SearchBox placeholder={"Search GIPHY"} setData={setData} />
      <Cards data={data} />
    </>
  );
}

export default App;
