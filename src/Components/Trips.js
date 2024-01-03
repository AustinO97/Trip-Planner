import { useOutletContext } from 'react-router-dom'
import TripCard from './TripCard'

const Trips = () => {
  const { trips, setSearchTerm } = useOutletContext()

  const startingTrips = trips.map((trip) => {
    return <TripCard key={trip.id} trip={trip} />
  })

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  }

  return (
      <div>
          <h1>
            Trip Planner
          </h1>
          <form>
            <input 
            type="text/"
            placeholder='Search Trips...'
            onChange={handleChange}
            />
          </form>
            {startingTrips}
      </div>
  )
}

export default Trips