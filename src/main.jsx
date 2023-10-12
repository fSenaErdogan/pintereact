import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.css'
import {
  RouterProvider,
} from "react-router-dom";
import routerArray from './router';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={routerArray} />
  </React.StrictMode>,
)
