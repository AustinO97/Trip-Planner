import React from 'react'
import { useOutletContext } from 'react-router-dom'

const Trips = ({ trip }) => {
    const { name, image, description, id } = trip
    const { handleAddTripBtn, handlDeleteTrip } = useOutletContext()

    const handleDelete = () => {
      fetch(`http://localhost:3000/places/${id}`, {
        method: 'DELETE',
      })
      .then(res => res.json())
      .then(() => handlDeleteTrip(trip))
    }

  return (
    <div>
        <h4>{name}</h4>
        <img src={image} alt={name} />
        <br/>
            <button onClick={() => handleAddTripBtn(trip)}>Add Trip</button> <button onClick={handleDelete}>Remove Trip</button>
        <p>Description: {description}</p>
    </div>
  )
}

export default Trips