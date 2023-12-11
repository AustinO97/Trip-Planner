import React from 'react'
import { Outlet, useOutletContext } from 'react-router-dom'

const AddTrip = () => {
  const {trips, setTrips} = useOutletContext()


  return (
      <form>
        <input 
        type="text"
        placeholder='Enter Destination'
        // value=''
        // onChange={}
        />
        <br/>
        <br/>
        <input 
        type="text"
        placeholder='Enter Picture'
        // value=''
        // onChange={}
        />
        <br/>
        <br/>
        <input 
        type="text"
        placeholder='Enter Description'
        // value=''
        // onChange={}
        />
        <br/>
        <br/>
        <button type='submit'>Add Trip</button>
      </form>
  )
}

export default AddTrip