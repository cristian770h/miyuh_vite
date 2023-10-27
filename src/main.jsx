import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { routes } from './routes/routes.jsx'
import { GoogleOAuthProvider } from '@react-oauth/google'

ReactDOM.createRoot(document.getElementById('root')).render(
  <GoogleOAuthProvider clientId="1076382723199-s0r269hj4od7gs4d9lmhh4jghu9qm1o9.apps.googleusercontent.com">
  <React.StrictMode>
    <RouterProvider router={routes}/>

  </React.StrictMode>,
  </GoogleOAuthProvider>
)
