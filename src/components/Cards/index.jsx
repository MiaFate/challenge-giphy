import React from 'react'
import Card from '../Card'
const Cards = ({ data }) => {
  
  return (
    <div className="cards">
    {data?data.map(gif => (
        <Card gif={gif} key={gif.id}/>
        )):""}
    </div>
  )
}
export default Cards;