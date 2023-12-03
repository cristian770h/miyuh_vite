import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function ForecastCincoDias() {
    const [clima, setDatos] = useState(null);
    const params = useParams();
    const ciudadBusqueda = params.ciudadBusqueda;
    const [marginTop, setMarginTop] = useState(10);
    const [isContentVisible, setIsContentVisible] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);

    const [hourlyContentVisibility, setHourlyContentVisibility] = useState([]);

    const toggleContentVisibility = (index) => {
        if (index === -1) {
            setIsContentVisible(!isContentVisible);
        } else {
            const newVisibility = [...hourlyContentVisibility];
            newVisibility[index] = !newVisibility[index];
            setHourlyContentVisibility(newVisibility);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://api.weatherapi.com/v1/forecast.json?key=b09b3aeceb74476391e133322231411&q=${ciudadBusqueda}&aqi=yes&forecast_day=14&dt=2023-13-12`);
                setDatos(response.data);
            } catch (error) {
                console.error('Error al obtener datos:', error);
            }
        };

        fetchData();
    }, [ciudadBusqueda]);

    useEffect(() => {
        if (isContentVisible) {
            setMarginTop(1850); // Ajusta el margen superior cuando el detalle está visible
        } else {
            setMarginTop(10); // Vuelve al valor original cuando el detalle está oculto
        }
    }, [isContentVisible]);
    const navigate = useNavigate();

    return (
        <div className="flex justify-center items-center w-screen h-screen">
            <div className="container mx-auto mt-10 p-4 bg-blue-200 text-blue-800 rounded-lg shadow-lg transition-max-height duration-300 ease-in-out" style={{ marginTop: `${marginTop}px` }}>
                {clima && (
                    <>
                        <div className="text-2xl font-semibold mb-4 text-center">
                            {clima.location.name}
                        </div>
                        <div className="flex flex-col items-center mb-4">
                            <div className="text-3xl font-bold">
                                {clima.current.temp_c}°C
                            </div>
                            <div className="flex items-center space-x-2">
                                <img
                                    src={clima.current.condition.icon}
                                    alt="Icono del Clima"
                                    className="w-10 h-10"
                                />
                                <span>{clima.current.condition.text}</span>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="text-center p-4 bg-white rounded-lg shadow-md">
                                <div className="text-xl font-semibold mb-2">
                                    Sensación Térmica
                                </div>
                                <div>{clima.current.feelslike_c}°C</div>
                            </div>
                            <div className="text-center p-4 bg-white rounded-lg shadow-md">
                                <div className="text-xl font-semibold mb-2">
                                    Humedad
                                </div>
                                <div>{clima.current.humidity}%</div>
                            </div>
                            <div className="text-center p-4 bg-white rounded-lg shadow-md">
                                <div className="text-xl font-semibold mb-2">
                                    Índice UV
                                </div>
                                <div>{clima.current.uv}</div>
                            </div>
                            <div className="text-center p-4 bg-white rounded-lg shadow-md">
                                <div className="text-xl font-semibold mb-2">
                                    Viento
                                </div>
                                <div>{clima.current.wind_kph} km/h</div>
                            </div>
                        </div>
                        <div className="mt-4 text-center">
                            <button
                                className="bg-white text-blue-500 py-2 px-4 rounded-lg hover:bg-blue-100"
                                onClick={() => toggleContentVisibility(-1)}
                            >
                                {isContentVisible
                                    ? 'Ocultar Detalles'
                                    : 'Mostrar Detalles'}
                            </button>
                        </div>
                        {isContentVisible && (
                            <div className="mt-4">
                                <h2 className="text-xl font-semibold mb-2 text-center">
                                    Detalles
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                    {clima.forecast.forecastday[0].hour.map(
                                        (hora, index) => (
                                            <div
                                                key={index}
                                                className="p-4 bg-white rounded-lg shadow-md "
                                            >
                                                <div className="text-lg font-semibold mb-2 text-center">
                                                    Hora: {hora.time.split(' ')[1]}
                                                </div>
                                                <div>
                                                    <span className="font-semibold">
                                                        Sensación Térmica:{' '}
                                                    </span>
                                                    {hora.feelslike_c}°C
                                                </div>
                                                <div>
                                                    <span className="font-semibold">
                                                        Humedad:{' '}
                                                    </span>
                                                    {hora.humidity}%
                                                </div>
                                                <div>
                                                    <span className="font-semibold">
                                                        Índice UV:{' '}
                                                    </span>
                                                    {hora.uv}
                                                </div>
                                                <div>
                                                    <span className="font-semibold">
                                                        Viento:{' '}
                                                    </span>
                                                    {hora.wind_kph} km/h
                                                </div>
                                                <div className="mt-2 text-center">
                                                    <button
                                                        className="bg-blue-500 text-white py-1 px-2 rounded-lg hover:bg-blue-600"
                                                        onClick={() =>
                                                            toggleContentVisibility(
                                                                index
                                                            )
                                                        }
                                                    >
                                                        {hourlyContentVisibility[
                                                            index
                                                        ]
                                                            ? 'Ocultar Detalles'
                                                            : 'Mostrar Detalles'}
                                                    </button>
                                                </div>
                                                {hourlyContentVisibility[index] && (
                                                    <div className="mt-2">
                                                        <div>
                                                            <span className="font-semibold">
                                                                Nubosidad:{' '}
                                                            </span>
                                                            {hora.cloud}%
                                                        </div>
                                                        <div>
                                                            <span className="font-semibold">
                                                                Calidad de Aire (CO):{' '}
                                                            </span>
                                                            {hora.air_quality.co} μg/m³
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        )
                                    )}
                                </div>
                            </div>
                        )}
                    </>
                )}
            </div>
        </div>
    );
}
