import React, { useState, useEffect } from 'react'
import NavBar from './NavBar';
import { Outlet } from 'react-router-dom';

function App() {
  const [trips, setTrips] = useState([])
  const [myTrips, setMyTrips] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/places')
    .then(res => res.json())
    .then(data => setTrips(data))
  }, [])

  const handleAddTrip = (newTrip) => {
    setMyTrips([...myTrips, newTrip])
  }

  return (
    <>
      <header>
          <NavBar />
      </header>
      <Outlet context={{trips: trips, handleAddTrip: handleAddTrip, myTrips: myTrips}} />
    </>
  );
}

export default App;