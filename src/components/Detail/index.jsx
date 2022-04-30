import React from 'react'
import { useLocation} from 'react-router-dom'

const Detail = () => { 
    const location = useLocation();
    console.log(location);
    const {title, url} = location.state;
    return (
        <><h1> {title}</h1>
        <div><img src={url} alt={title}/></div>
        </>
  )
}

export default Detail