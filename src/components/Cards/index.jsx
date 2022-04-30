import React from 'react'
import Card from '../Card'
import { Grid } from '@chakra-ui/react'
const Cards = ({ data: gifData }) => {

  return (
    <Grid templateColumns='repeat(4, 1fr)' gap={3} id="cards" ml={'2rem'} mr={'2rem'}>
      {gifData ? gifData.map(gif => (
        <Card gif={gif} key={gif.id} />
      )) : ""}
    </Grid>
  )
}
export default Cards;