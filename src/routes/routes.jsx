

import { createBrowserRouter } from "react-router-dom";
import Navbar from "../components/navbar";
import Dashboard from "../pages/dashboard";
import Login from "../pages/login";
import Artist from "../pages/artist";
import Albums from "../pages/albums";
import Moreinfo from "../pages/more_info";
import CardAlbum from "../components/card_albums";
import AlbumDetails from "../pages/albumdetails";
import Example from "../pages/login2";
import UpdUser from "../components/UpdUser";
import CondicionesAtmosfericas from "../pages/clima";
import BuscarImg from "../components/buscarimg";
import YoutubeAPi from "../components/ytapi";
import Home from "../pages/Home";
import SongDetails from "../pages/SongDetails";
import MasArtistas from "../components/MoreArtist";
export const routes = createBrowserRouter([
    {
    path: "/",
    element: <Navbar />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
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
    },
    {
        path:"/login2",
        element:<Example/>
    },
    {
        path:"/update/:id",
        element:<UpdUser/>
    },
    {
        path:"/clima",
        element:<CondicionesAtmosfericas/>
    },
    {
        path:"/img",
        element:<BuscarImg/>
    },
    {
        path:"/yt",
        element:<YoutubeAPi/>
    },
    {
        path:"/letra",
        element:<SongDetails/>
    },
    {
        path:"/Related",
        element:<MasArtistas/>
    }
    
])