import React from 'react'
import { Outlet, useOutletContext } from 'react-router-dom'

const MyTrips = () => {
  const { myTrips } = useOutletContext()
  console.log(myTrips);

  const myAddedTrips = myTrips.map((trip) => trip)

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