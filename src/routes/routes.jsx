

import { createBrowserRouter } from "react-router-dom";
import Navbar from "../components/navbar";
import Dashboard from "../pages/dashboard";
import Adduser from "../pages/addUser";
import Login from "../pages/login";
import Artist from "../pages/artist";
import Albums from "../pages/albums";
import Moreinfo from "../pages/more_info";
import CardAlbum from "../components/card_albums";
import AlbumDetails from "../pages/albumdetails";

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
        path:"albums",
        element:<Albums/>
    },
    {
        path:"mas_informacion",
        element:<Moreinfo/>
    }, 
    {
        path:"cardalbum",
        element:<CardAlbum/>
    },
    {
        path:"albumdetails",
        element:<AlbumDetails/>
    },  
    {
        path:"*",
        element:<h1>Error</h1>
    }
])