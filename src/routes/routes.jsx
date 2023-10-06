import { createBrowserRouter } from "react-router-dom";
import Navbar from "../components/navbar";
import Login from "../pages/login";
import Dashboard from "../pages/dashboard";


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
        path:"*",
        element:<h1>Error</h1>
    }
])