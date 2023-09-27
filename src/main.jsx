import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import mycreatedRoute from "./router/Route"


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={mycreatedRoute}></RouterProvider>
  </React.StrictMode>,
)
