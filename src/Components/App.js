import React, { useState, useEffect } from 'react'
import NavBar from './NavBar';
import { Outlet, useNavigate } from 'react-router-dom';

function App() {
  const [trips, setTrips] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    fetch('http://localhost:3000/places')
    .then(res => res.json())
    .then(data => setTrips(data))
  }, [])

  const handlDeleteTrip = (deletedTrip) => {
    const updatedTrips = trips.filter((tripObj) => tripObj.id !== deletedTrip.id)
    setTrips(updatedTrips)
  }

  const handleAddTrip = (newTrip) => {
    setTrips([...trips, newTrip])
    navigate('/Trips')
  }

  const filteredTrips = trips.filter((tripObj) => tripObj.name.toLowerCase().includes(searchTerm.toLowerCase()))

  return (
    <>
      <header>
          <NavBar />
      </header>
      <Outlet 
      context={{
      trips: filteredTrips, 
      setSearchTerm: setSearchTerm,
      handleAddTrip: handleAddTrip,  
      handlDeleteTrip: handlDeleteTrip
    }}/>
    </>
  );
}

export default App;