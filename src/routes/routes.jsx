

import { createBrowserRouter } from "react-router-dom";
import Navbar from "../components/navbar";
import UserDash from "../dashboard/UsersDash";
import Login from "../pages/login";
import Home from "../pages/Home";
import weather2 from "../components/weather_component";
import BuscarImg from "../components/buscarimg";
import NavDash from "../dashboard/navdash";
import Noticias_Page from  "../pages/Noticia_Page";

import Weather from "../components/Weather_comp";
import Footer from "../components/footer";

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
                element: <Weather/>
            },
            {
                path: "/calidad_aire",
                element: <BuscarImg />
            },
            {
                path: "/noticias",
                element: <Noticias_Page/>
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
<Footer/>
])