import React from 'react'
import { useOutletContext } from 'react-router-dom'

const Trips = ({ trip }) => {
    const { name, image, description } = trip
    const { handleAddTripBtn } = useOutletContext()

  return (
    <div>
        <h4>{name}</h4>
        <img src={image} alt={name} />
        <br/>
        <button onClick={ () => handleAddTripBtn(trip)}>Add Trip</button>
        <p>Description: {description}</p>
    </div>
  )
}

export default Trips