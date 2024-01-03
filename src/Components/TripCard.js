import React, { useState } from 'react'
import { useOutletContext } from 'react-router-dom'

const TripCard = ({ trip }) => {
    const [isLiked, setIsLiked] = useState(false)
    const { name, image, description, id } = trip
    const { handlDeleteTrip } = useOutletContext()

    const handleDelete = () => {
      fetch(`http://localhost:3000/places/${id}`, {
        method: 'DELETE',
      })
      .then(res => res.json())
      .then(() => handlDeleteTrip(trip))
    }

    const handlechange = () => {
      setIsLiked(!isLiked)
    }

  return (
    <div>
        <h4>{name}</h4>
        <img src={image} alt={name} />
        <br/>
            <button onClick={handlechange}>
              Like Trip { isLiked ? ( <p>★</p> ) : ( <p>☆</p> ) }
            </button> 
            <br/>
            <br/>
            <button onClick={handleDelete}>Remove Trip</button>
            <hr/>
        <p>Description: {description}</p>
    </div>
  )
}

export default TripCard