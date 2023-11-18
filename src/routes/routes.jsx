

import { createBrowserRouter } from "react-router-dom";
import Navbar from "../components/navbar";
import Dashboard from "../pages/dashboard";
import Login from "../pages/login";
import Home from "../pages/Home";
import weather2 from "../components/weather_component";
import PortadaArtist from "../components/Portada_Artist";
import BuscarImg from "../components/buscarimg";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Navbar />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path:"/clima",
                element:<PortadaArtist/>
            },
            {
                path:"/mapa",
                element:<BuscarImg/>
            },
        ],
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/dasboard",
        element: <Dashboard />

    },
    {
        path:"clima",
        element:<PortadaArtist/>
    },
    {
        path:"clima2",
        element:<weather2/>
    },

])