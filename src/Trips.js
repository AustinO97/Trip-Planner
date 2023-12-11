import React from 'react'

const Trips = ({ trip }) => {
    const { name, image, description } = trip

  return (
    <div>
        <h4>{name}</h4>
        <img src={image} alt={name} />
        <br/>
        <button>Add Trip</button>
        <p>Description: {description}</p>
    </div>
  )
}

export default Trips