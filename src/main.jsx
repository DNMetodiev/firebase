import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import "index.scss"

import {
  // createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"

import { router } from "./Routes";
// import { app } from './firebaseConfig'

import './index.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />
  </React.StrictMode>,
)
