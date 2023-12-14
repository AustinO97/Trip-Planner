import React from 'react'
import App from './Components/App'
import Home from './Components/Home'
import MyTrips from './Components/MyTrips'
import AddTrip from './Components/Add Trip'

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