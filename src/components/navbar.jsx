import axios from "axios";
import { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import Weather from "./Weather_comp";
import ForecastCincoDias from "./forecast_5";
import FiveDaysPage from "../pages/5daysClima";
import { useNavigate } from "react-router-dom";
export default function Navbar() {

    const [clima, setDatos] = useState(null);
    const [ciudadBusqueda, setCiudadBusqueda] = useState("Canada");
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://api.weatherapi.com/v1/current.json?key=b09b3aeceb74476391e133322231411&q=${ciudadBusqueda}&aqi=yes`);
                console.log('xD:', response.data);
                setDatos(response.data); // Ajustado para tomar la respuesta directa
            } catch (error) {
                console.error('Error al obtener datos:', error);
            }
        };

        fetchData();
    }, [ciudadBusqueda]);
    const handleSearchChange = (e) => {
        setCiudadBusqueda(e.target.value);
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
    };

    const navigate = useNavigate();
    return (
        <>
            <div className="navbar-container flex-col min-h-0 static">
                <div className='bg-blue-400 text-black fixed top-0 left-0 w-full flex flex-row justify-between px-[15rem]  items-center z-10'>
                    <div className="" >
                        <ul className="flex flex-row ">
                            <li>
                                <div className="flex flex-row items-center justify-center  p-2  gap-2">
                                    <div className="w-[3.5rem] ">
                                        <Link to={"/"}>
                                            <img src="src\assets\img\logo-removebg.png" alt="" />

                                        </Link>
                                    </div>
                                    <div className="pr-[6rem]">
                                        <span className="text-white text-[15px] ">Weather Wizard</span>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="pr-52">
                        <form onSubmit={handleSearchSubmit} className="flex flex-row items-center">
                            <div className="flex flex-row items-center justify-center border-2 p-2 rounded-2xl gap-2">
                                <div className="flex items-center justify-center">
                                    <box-icon name="search" color="white"></box-icon>
                                </div>
                                <input
                                    className="bg-white outline-none rounded-xl p-20 py-[0.5px]"
                                    type="search"
                                    placeholder="Buscar ciudad"
                                    value={ciudadBusqueda}
                                    onChange={handleSearchChange}
                                ></input>
                                <button type="submit" className=" bg-blue-500 text-white p-2 rounded-lg  w-13 h-[1rem] text-[10px] text-center"

                                >Buscar</button>
                            </div>

                        </form>
                    </div>

                    <div className="flex flex-row">
                        <div className=" flex flex-row items-center px-5 gap-4">
                            <box-icon name='user-circle' type='solid' color='white' size='lg'></box-icon>
                        </div>
                    </div>
                </div>
                {clima && (
                    <div className="bg-blue-300 text-black fixed top-0 left-0 w-full flex flex-row justify-between px-20 py-1 items-center  mt-[4rem] z-20">
                        <div>
                            <ul className="flex flex-row justify-between z-10 text-white">
                                <li className="px-1"><img src={clima.current.condition.icon} alt="" className="w-7 h-7" /></li>
                                <li className="px-2">{clima.current.temp_c}°C    </li>
                                <li><span className="text-sm">{clima.location.name}</span></li>
                            </ul>
                        </div>
                    </div>)}
                <div className="bg-blue-500 text-black fixed top-0 left-0 w-full flex justify-between px-20 py-1 items-center z-10 mt-[6.2rem]">
                    <div className="">
                        <ul className="flex flex-row text-white font-kanit text-1xs justify-between px-[16rem] z-10 object-center">
                            <Link className="text-white hover:text-black">
                                <li className="px-3 hover:underline py-2">Inicio</li>
                            </Link>
                            <Link className="text-white hover:text-black" to={"/calidad_aire"}>
                                <li className="px-7 hover:underline text-[15px] py-2">Mapa de calidad del aire</li>
                            </Link>
                            <li className="px-7 hover:underline">
                                <button onClick={() => navigate(`/cinco_dias/${ciudadBusqueda}`)} className="bg-transparent  text-[15px]">Pronóstico 5 días</button>
                            </li>
                            <li className="px-7 hover:underline">
                                <button onClick={() => navigate(`/update_noticia/${users.id_Noticia}`)} className="bg-transparent w-[px] h-[.5px] text-[15px]">Pronóstico 14 días</button>
                            </li>
                            <Link className="text-white hover:text-black" to={"noticias"}>
                                <li className="px-7 hover:underline py-2">Noticias</li>
                            </Link>
                        </ul>
                    </div>
                </div>
                <Outlet />

            </div>
        </>
    );
}