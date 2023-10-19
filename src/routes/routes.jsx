

import { createBrowserRouter } from "react-router-dom";
import Navbar from "../components/navbar";
import Dashboard from "../pages/dashboard";
import Adduser from "../pages/addUser";
import Login from "../pages/login";
import Artist from "../pages/artist";


export const routes = createBrowserRouter([
    {
        path:"/",
        element:<Navbar/>
    },     
    {
        path:"/login",
        element:<Login/>
    }, 
    {
        path:"/dasboard",
        element:<Dashboard/>

    },  
    {
        path:"artist",
        element:<Artist/>
    },  
    {
        path:"*",
        element:<h1>Error</h1>
    }
])