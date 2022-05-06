import React, { useEffect, useState } from 'react';
import Card from '../Card';
import { Grid } from '@chakra-ui/react';
import useSWR from 'swr';
//import searchGifs from '../../helpers/fetchs';
const Cards = ({ query }) => {
 
  const { data: { data: data } } = useSWR(`https://api.giphy.com/v1/gifs/trending?api_key=${process.env.REACT_APP_APIKEY}&limit=25&rating=g`, { suspense: true });
  const { data: { data: data2 } } = useSWR(`https://api.giphy.com/v1/gifs/search?api_key=${process.env.REACT_APP_APIKEY}&q=${query}&limit=25&offset=0&rating=g&lang=en`, { suspense: true });
  console.log(data2)
   // eslint-disable-next-line no-unused-vars
   const [gifs, setGifs] = useState(data);
  useEffect(() => {
    if(query.length>0){
      setGifs(data2);
    }
    //setGifs(data2) ;
  }, [query]);
  console.log(query);
  return (
    <Grid templateColumns='repeat(4, 1fr)' gap={3} id="cards" ml={'2rem'} mr={'2rem'}>
      {gifs.map(gif => (
        <Card gif={gif} key={gif.id} />
      ))}
    </Grid>
  )
};

export default Cards;