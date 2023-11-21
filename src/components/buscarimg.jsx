import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
export default function BuscarImg() {
    const [datos, setDatos] = useState(null);
    const [city, setCity] = useState("");

    const mapRef = useRef(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://api.waqi.info/feed/canada/?token=7bc357581d07019b5e735069eaf31831a7578976');
                console.log('Respuesta de la API:', response.data);
                setDatos(response.data); // Ajustado para tomar la respuesta directa
            } catch (error) {
                console.error('Error al obtener datos:', error);
            }
        };

        fetchData();
    }, []);


    useEffect(() => {
        const OSM_URL = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
        const OSM_ATTRIB = '© OpenStreetMap contributors';
        const osmLayer = L.tileLayer(OSM_URL, { attribution: OSM_ATTRIB });

        const WAQI_URL = "https://tiles.waqi.info/tiles/usepa-aqi/{z}/{x}/{y}.png?token=7bc357581d07019b5e735069eaf31831a7578976";
        const WAQI_ATTR = 'Air Quality Tiles © waqi.info';
        const waqiLayer = L.tileLayer(WAQI_URL, { attribution: WAQI_ATTR });

        if (!mapRef.current) return;

        const map = L.map(mapRef.current).setView([51.505, -0.09], 11);
        map.addLayer(osmLayer).addLayer(waqiLayer);
    }, []);

    const getBgColor = (aqi) => {

        if ((aqi > 0) && (aqi <= 50)) {
            return "bg-green-500"; // Bueno
        } else if ((aqi >= 51) && (aqi <= 100)) {
            return "bg-yellow-500"; // Moderado
        } else if ((aqi >= 101) && (aqi <= 150)) {
            return "bg-orange-500"; // Dañino para grupos sensibles
        } else if ((aqi >= 151) && (aqi <= 200)) {
            return "bg-red-500"; // Dañino
        } else if ((aqi >= 201) && (aqi <= 300)) {
            return "bg-purple-500"; // Muy dañino
        } else if (aqi >= 300) {
            return "bg-red-700"; // Peligroso
        } else {
            return "bg-grey-800";
        }
    };

    const AirQuality = (aqi) => {
        if ((aqi > 0) && (aqi <= 50)) {
            return "Bueno"; // Bueno
        } else if ((aqi >= 51) && (aqi <= 100)) {
            return "Moderado"; // Moderado
        } else if ((aqi >= 101) && (aqi <= 150)) {
            return "Dañino para grupos sensibles"; // Dañino para grupos sensibles
        } else if ((aqi >= 151) && (aqi <= 200)) {
            return "Dañino"; // Dañino
        } else if ((aqi >= 201) && (aqi <= 300)) {
            return "Muy dañino"; // Muy dañino
        } else if (aqi >= 300) {
            return "Peligroso"; // Peligroso
        }
    };

    const buttonContainerRef = useRef(null);

    const scrollLeft = () => {
        buttonContainerRef.current.scrollBy({ left: -100, behavior: 'smooth' });
    };

    const scrollRight = () => {
        buttonContainerRef.current.scrollBy({ left: 100, behavior: 'smooth' });
    };

    return (
        <>
            <div className=' text-justify text-black mt-[12rem] ml-[30rem] text-2xl'>
                <span className='text-[65px] font-kanit'>Calidad del aire</span>
            </div>

            <div className='flex justify-center items-center object-center ml-72'>

                {datos && (

                    <div className='flex  gap-12 mx-5 mt-20'>
                        <div>

                            <div className={`max-w-sm rounded overflow-hidden shadow-lg ${getBgColor(datos.data.aqi)} text-white w-auto h-44 my-24`}>
                                <div className=" px-6 py-4">
                                    <div className="font-bold text-xl mb-2">{datos.data.city.name}</div>
                                    <p className="text-center text-3xl">{datos.data.aqi}</p>
                                    <p className="text-center font-bold">{AirQuality(datos.data.aqi)}</p>
                                </div>
                                <div className="px-6 pt-4 pb-2">
                                    <div className="flex justify-between items-center">
                                        <span>{datos.data.dominent}</span>
                                        <div className="w-full  rounded-full h-2 mx-2">
                                            <div className="bg-green-200 rounded-full h-2" style={{ width: '45%' }}></div>
                                        </div>
                                        <span>9</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=''>
                            <div ref={mapRef} id='map' style={{ height: '500px', width: '600px' }} />
                        </div>
                    </div>

                )}

            </div>


            <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                AQI
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Nivel de contaminación del aire
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Implicaciones para la salud
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Declaración de precaución (para PM2.5)
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="bg-green-500 text-white border-b ">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                0-50
                            </th>
                            <td class="px-6 py-4">
                                Bueno
                            </td>
                            <td class="px-6 py-4">
                                La calidad del aire se considera satisfactoria y la contaminación del aire representa poco o ningún riesgo.
                            </td>
                            <td class="px-6 py-4">
                                Ninguna
                            </td>
                        </tr>
                        <tr class="bg-yellow-400 text-white border-b ">
                            <th scope="row" class="px-6 py-4 font-medium  whitespace-nowrap ">
                                51-100
                            </th>
                            <td class="px-6 py-4">
                                Moderado
                            </td>
                            <td class="px-6 py-4">
                                La calidad del aire es aceptable; sin embargo, para algunos contaminantes puede haber
                                un problema de salud
                                moderado para un número
                                muy pequeño de personas que son
                                inusualmente sensibles a la contaminación del aire.
                            </td>
                            <td class="px-6 py-4">
                                Los niños y adultos activos y las personas con enfermedades respiratorias, como asma,
                                deben limitar el esfuerzo prolongado al aire libre.
                            </td>
                        </tr>
                        <tr class="bg-orange-400 text-white">
                            <th scope="row" class="px-6 py-4 font-medium  whitespace-nowrap ">
                                101-150
                            </th>
                            <td class="px-6 py-4">
                                Dañino para grupos sensibles
                            </td>
                            <td class="px-6 py-4">
                                Los miembros de grupos sensibles pueden experimentar efectos sobre la salud.
                                No es probable que el público en general se vea afectado.
                            </td>
                            <td class="px-6 py-4">
                                Los niños y adultos activos y las personas con enfermedades respiratorias, como asma, deben limitar el esfuerzo prolongado al aire libre.
                            </td>
                        </tr>
                        <tr class="bg-red-600 text-white">
                            <th scope="row" class="px-6 py-4 font-medium  whitespace-nowrap ">
                                151-200
                            </th>
                            <td class="px-6 py-4">
                                Dañino
                            </td>
                            <td class="px-6 py-4">
                                Todo el mundo puede empezar a experimentar efectos sobre la salud;
                                Los miembros de grupos sensibles pueden experimentar efectos más graves para la salud.
                            </td>
                            <td class="px-6 py-4">
                                Los niños y adultos activos y las personas con enfermedades respiratorias, como asma, deben evitar el esfuerzo prolongado al aire libre;
                                todos los demás, especialmente los niños, deben limitar el esfuerzo prolongado al aire libre.
                            </td>
                        </tr>
                        <tr class="bg-purple-700 text-white ">
                            <th scope="row" class="px-6 py-4 font-medium  whitespace-nowrap ">
                                201-300
                            </th>
                            <td class="px-6 py-4">
                                Muy Dañino
                            </td>
                            <td class="px-6 py-4">
                                Advertencias sanitarias de condiciones de emergencia. Es más probable que toda la población se vea afectada.
                            </td>
                            <td class="px-6 py-4">
                                Los niños y adultos activos y las personas con enfermedades respiratorias, como asma, deben evitar todo esfuerzo al aire libre;
                                todos los demás, especialmente los niños, deben limitar el esfuerzo al aire libre.
                            </td>
                        </tr>
                        <tr class="bg-red-800 text-white">
                            <th scope="row" class="px-6 py-4 font-medium  whitespace-nowrap ">
                                300+
                            </th>
                            <td class="px-6 py-4">
                                Peligroso
                            </td>
                            <td class="px-6 py-4">
                                Alerta de salud: todos pueden experimentar efectos de salud más graves
                            </td>
                            <td className="px-6 py-4">
                                Todo el mundo debería evitar todo esfuerzo al aire libre.
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div>

            </div>

        </>
    );
}
