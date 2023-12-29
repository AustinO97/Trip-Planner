import React from 'react'
import { useOutletContext } from 'react-router-dom'
import Trips from './Trips'

const MyTrips = () => {
  const { myTrips } = useOutletContext()

  const myAddedTrips = myTrips.map((trip) => <Trips key={trip.id} trip={trip} />)

  return (
    <>
      <h2>About Trip Planner</h2>
      <div>
        {myAddedTrips}
      </div>
    </>
  )
}

export default MyTrips