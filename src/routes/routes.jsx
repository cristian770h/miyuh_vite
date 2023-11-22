

import { createBrowserRouter } from "react-router-dom";
import Navbar from "../components/navbar";
import UserDash from "../dashboard/UsersDash";
import Login from "../pages/login";
import Home from "../pages/Home";
import weather2 from "../components/weather_component";
import PortadaArtist from "../components/Portada_Artist";
import BuscarImg from "../components/buscarimg";

import NavDash from "../dashboard/navdash";

import Noticia_Page from "../pages/Noticia_Page";

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
                path: "/clima",
                element: <PortadaArtist />
            },
            {
                path: "/mapa",
                element: <BuscarImg />
            },
            {
                path: "/noticia",
                element: <Noticia_Page/>
            },
        ],
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/dashboard",
        element: <NavDash />,
        children: [

        ]

    },
    {
        path: "clima",
        element: <PortadaArtist />
    },
    {
        path: "noticiacomponent",
        element: <Noticia_component />
    },

])