import React from 'react'
import App from './Components/App'
import Trips from './Components/Trips'
import AddTrip from './Components/AddTrip'
import About from './Components/About'

const routes = [
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <About />
      },
      {
        path: '/trips',
        element: <Trips />
      },
      {
        path: '/trips/new',
        element: <AddTrip />
      }
    ]
  }
]

export default routes