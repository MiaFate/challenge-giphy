import React from 'react';
import Card from '../Card';
import { Grid } from '@chakra-ui/react';
import useSWR from 'swr';

const Cards = ({ query: search }) => {

  const key = (query) => {
    if (query == "") {
      return `https://api.giphy.com/v1/gifs/trending?api_key=${process.env.REACT_APP_APIKEY}&limit=25&rating=g`;
    } else {
      return `https://api.giphy.com/v1/gifs/search?api_key=${process.env.REACT_APP_APIKEY}&q=${query}&limit=25&offset=0&rating=g&lang=en`;
    }
  }

  const { data: { data } } = useSWR(key(search), { suspense: true });

  return (

    <Grid templateColumns='repeat(4, 1fr)' gap={3} id="cards" ml={'2rem'} mr={'2rem'}>
      {console.log("render")}
      {data.map(gif => (
        <Card gif={gif} key={gif.id} />
      ))}
    </Grid>
  )
};

export default Cards;