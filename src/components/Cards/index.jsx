import React, {  useEffect, useState } from 'react';
import Card from '../Card';
import { Grid } from '@chakra-ui/react';
import useSWR from 'swr';
//import searchGifs from '../../helpers/fetchs';
const Cards = ({ query }) => {

  const key = (k) => {
    if (query == "") {
      return `https://api.giphy.com/v1/gifs/trending?api_key=${process.env.REACT_APP_APIKEY}&limit=25&rating=g`;
    } else {
      return `https://api.giphy.com/v1/gifs/search?api_key=${process.env.REACT_APP_APIKEY}&q=${k}&limit=25&offset=0&rating=g&lang=en`;
    }
  }

  const { data: { data } } = useSWR(key(query), { suspense: true });
  const [gifs, setGifs] = useState([]);
  console.log(`render`);

  useEffect(() => {

    setGifs(data);

  }, [data]);

  return (
    <Grid templateColumns='repeat(4, 1fr)' gap={3} id="cards" ml={'2rem'} mr={'2rem'}>
      {gifs.map(gif => (
        <Card gif={gif} key={gif.id} />
      ))}
    </Grid>
  )
};

export default Cards;