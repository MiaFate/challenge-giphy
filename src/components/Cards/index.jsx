import React from 'react'
import Card from '../Card'
const Cards = ({ data: gifData }) => {

  return (
    <div className="cards">
      {gifData ? gifData.map(gif => (
        <Card gif={gif} key={gif.id} />
      )) : ""}
    </div>
  )
}
export default Cards;