import { createBrowserRouter,Outlet } from "react-router-dom";
import Navbar from "../components/navbar";
import Home from "../pages/Home";
import BuscarImg from "../components/buscarimg";
import Noticias_Page from "../pages/Noticia_Page";
import Weather from "../components/Weather_comp";
import Footer from "../components/footer";
import Noticia_id from "../components/noticia_id";
import UpdUser from "../components/UpdUser";
import Page_Users from "../dashboard/das-pages/table_users";
import Page_Noticia from "../dashboard/das-pages/table_noticia_page";
import UpdNoticia from "../dashboard/UpdNoticia";
import FiveDaysPage from "../pages/5daysClima";
import ForecastCincoDias from "../components/forecast_5";
import LoginForm from "../components/login";
import ForecastCatorcecoDias from "../components/forecast_14";
import AcercaDe from "../pages/Acercade";
import RegisterForm from "../components/Registro";
export const routes = createBrowserRouter([
    {
        path: "/",
        element:  (<>
        <Navbar />
        
        <Footer  />
    </>),
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/clima",
                element: <Weather />
            },
            {
                path: "/calidad_aire",
                element: <BuscarImg />
            },
            {
                path: "/cinco_dias/:ciudadBusqueda",
                element: <ForecastCincoDias />
            },
            {
                path: "/catorce_dias/:ciudadBusqueda",
                element: <ForecastCatorcecoDias />
            },
            {
                path: "/noticias",
                element: <Noticias_Page />
            },
            {
                path: "/noticias/:id_Noticia",
                element: <Noticia_id />
            },
            {
                path: "/login",
                element: <LoginForm />

            },
            {
                path: "/Registro",
                element: <RegisterForm />

            },
            {
                path: "/acerca",
                element: <AcercaDe />
                
            },
<Footer/>
        ],
        
    },
    {
        path: "/dashboard_users",
        element: <Page_Users />,
    },
    {
        path: "/dias",
        element: <ForecastCincoDias />,
    },
    {
        path: "/dashboard_noticias",
        element: <Page_Noticia />,
    },
    {
        path: "/update/:id_user",
        element: <UpdUser />,

    },

    {
        path: "/update_noticia/:id_Noticia",
        element: <UpdNoticia />,

    },
    <Footer />
])
