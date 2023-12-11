import { Outlet, useOutletContext } from 'react-router-dom'
import Trips from './Trips'

const Home = () => {
  const {trips} = useOutletContext()

  const startingTrips = trips.map((trip) => {
    return <Trips key={trip.id} trip={trip} />
  })

  return (
      <div>
          <h1>
            Trip Planner
          </h1>
            <Outlet />
            {startingTrips}
      </div>
  )
}

export default Home