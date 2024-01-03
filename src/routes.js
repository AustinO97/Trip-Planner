import React from 'react'
import App from './Components/App'
import Trips from './Components/Trips'
import AddTrip from './Components/Add Trip'
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
        path: '/Trips',
        element: <Trips />
      },
      {
        path: '/new',
        element: <AddTrip />
      }
    ]
  }
]

export default routes