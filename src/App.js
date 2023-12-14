import React, { useState, useEffect } from 'react'
import NavBar from './NavBar';
import { Outlet, useNavigate } from 'react-router-dom';

function App() {
  const [trips, setTrips] = useState([])
  const [myTrips, setMyTrips] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    fetch('http://localhost:3000/places')
    .then(res => res.json())
    .then(data => setTrips(data))
  }, [])

  const handleAddTripBtn = (addTrip) => {
    const addNewTrip = myTrips.find((trip) => trip.id === addTrip.id)
    if (!addNewTrip) {
      setMyTrips([...myTrips, addTrip])
      navigate('/mytrips')
    }
  }

  const handleAddTrip = (newTrip) => {
    setMyTrips([...myTrips, newTrip])
  }

  return (
    <>
      <header>
          <NavBar />
      </header>
      <Outlet context={{trips: trips, handleAddTrip: handleAddTrip, myTrips: myTrips, handleAddTripBtn: handleAddTripBtn}} />
    </>
  );
}

export default App;