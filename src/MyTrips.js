import React from 'react'
import { Outlet, useOutletContext } from 'react-router-dom'
import Trips from './Trips'

const MyTrips = () => {
  const { myTrips } = useOutletContext()
  console.log(myTrips);

  const myAddedTrips = myTrips.map((trip) => <Trips key={trip.id} trip={trip} />)

  return (
    <>
      <h2>My Trips!</h2>
      <div>
        <Outlet />
        {myAddedTrips}
      </div>
    </>
  )
}

export default MyTrips