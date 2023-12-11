import React from 'react'
import App from './App'
import Home from './Home'
import MyTrips from './My Trips'
import AddTrip from './Add Trip'

const routes = [
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/mytrips',
        element: <MyTrips />
      },
      {
        path: '/add trip',
        element: <AddTrip />
      }
    ]
  }
]

export default routes