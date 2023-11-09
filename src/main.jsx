import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { routes } from './routes/routes.jsx'
import "boxicons"
import { GoogleOAuthProvider } from '@react-oauth/google'




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GoogleOAuthProvider 
    clientId= "577931470139-lre1f6t3qv66drug7rv2tgjp6h6po178.apps.googleusercontent.com">

    <RouterProvider router={routes}/>
    </GoogleOAuthProvider>
  </React.StrictMode>,
)
