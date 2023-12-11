import React, { useState, useEffect } from 'react'
import NavBar from './NavBar';
import { Outlet } from 'react-router-dom';

function App() {
  const [trips, setTrips] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/places')
    .then(res => res.json())
    .then(data => setTrips(data))
  }, [])

  return (
    <>
      <header>
          <NavBar />
      </header>
      <Outlet context={{trips: trips, setTrips: setTrips}} />
    </>
  );
}

export default App;
