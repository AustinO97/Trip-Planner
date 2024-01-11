import React, { useState } from 'react'
import { useOutletContext } from 'react-router-dom'


const AddTrip = () => {
  const {handleAddTrip} = useOutletContext()
  const [formData, setFormData] = useState({
    name: '',
    image: '',
    description: ''
  })

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch('http://localhost:3000/places', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(res => res.json())
    .then(data => handleAddTrip(data))
    .catch(error => console.error(error))
  }

  return (
    <section>
      <form onSubmit={handleSubmit} >
        <h3>Add New Trip</h3>
        <input 
        type="text"
        name='name'
        placeholder='Enter Destination'
        value={formData.name}
        onChange={handleChange}
        />
        <br/>
        <br/>
        <input 
        type="text"
        name='image'
        placeholder='Enter Picture'
        value={formData.image}
        onChange={handleChange}
        />
        <br/>
        <br/>
        <input 
        type="text"
        name='description'
        placeholder='Enter Description'
        value={formData.description}
        onChange={handleChange}
        />
        <br/>
        <br/>
        <button type='submit'>Add Trip</button>
      </form>
    </section>
  )
}

export default AddTrip