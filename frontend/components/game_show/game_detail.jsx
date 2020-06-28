import React from 'react';
import { Link } from 'react-router'


// : title, : price, : description, : release_date, 
// : developer, : publisher, : esrb_rating


const GameDetail = ({ game }) => {
  return (
    <div>
        <ul>
          <li>Title: {game.title}</li>
          <li>Price: {game.price}</li>
          <li>Description: {game.description}</li>
          <li>Release Date: {game.release_date}</li>
          <li>Publisher: {game.publisher}</li>
          <li>Developer: {game.developer}</li>
          <li>ESRB: {game.esrb_rating}</li> 
        </ul>
    </div>
  )
}

export default GameDetail;