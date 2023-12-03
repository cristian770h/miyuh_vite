import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import TableAqi from './table_aqi';

export default function BuscarImg() {
    const [datos, setDatos] = useState(null);
    const [city, setCity] = useState("");
    const mapRef = useRef(null);
    const mapInstanceRef = useRef(null);
    const [Pais, setPais] = useState("mexico");
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://api.waqi.info/feed/${Pais}/?token=7bc357581d07019b5e735069eaf31831a7578976`);
                console.log('Respuesta de la API:', response.data);
                setDatos(response.data);
            } catch (error) {
                console.error('Error al obtener datos:', error);
            }
        };

        fetchData();
    }, [Pais]);

    useEffect(() => {
        if (!datos || !mapRef.current) return;

        // Verifica si el mapa ya ha sido inicializado
        if (mapInstanceRef.current) {
            // Si el mapa ya existe, simplemente actualiza su vista
            const latLng = L.latLng(datos.data.city.geo[0], datos.data.city.geo[1]);
            mapInstanceRef.current.setView(latLng, 11);
        } else {
            // Si el mapa no existe, inicializa uno nuevo
            const OSM_URL = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
            const OSM_ATTRIB = '© OpenStreetMap contributors';
            const osmLayer = L.tileLayer(OSM_URL, { attribution: OSM_ATTRIB });

            const WAQI_URL = "https://tiles.waqi.info/tiles/usepa-aqi/{z}/{x}/{y}.png?token=7bc357581d07019b5e735069eaf31831a7578976";
            const WAQI_ATTR = 'Air Quality Tiles © waqi.info';
            const waqiLayer = L.tileLayer(WAQI_URL, { attribution: WAQI_ATTR });

            const latLng = L.latLng(datos.data.city.geo[0], datos.data.city.geo[1]);
            const map = L.map(mapRef.current).setView(latLng, 11);
            map.addLayer(osmLayer).addLayer(waqiLayer);

            mapInstanceRef.current = map; // Almacena la instancia del mapa
        }
    }, [datos]);
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
            return "bg-brown-800";
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
                            <label for="underline_select" class="sr-only">Underline select</label>
                            <select id="underline_select" class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
                                onChange={(e) => {setPais(e.target.value); console.log('Pais seleccionado:', e.target.value);}}
                                
                                value={Pais}>
                                <option selected >mexico</option>
                                <option value="mexico">Mexico</option>
                                <option value="Canada">Canada</option>
                                <option value="chile">Chile</option>
                                <option value="argentina">Argentina</option>
                                <option value="uruguay">Uruguay</option>
                                <option value="ecuador">Ecuador</option>
                                <option value="colombia">Colombia</option>
                                <option value="irak">Irak</option>
                                
                            </select>
                            <div className={`max-w-sm rounded overflow-hidden shadow-lg ${getBgColor(datos.data.aqi)} text-white w-auto h-44 my-24`}>
                                <div className=" px-6 py-4">
                                    <div className="font-bold text-xl mb-2">{datos.data.city.name}</div>
                                    <p className="text-center text-3xl">{datos.data.aqi}</p>
                                    <p className="text-center font-bold">{AirQuality(datos.data.aqi)}</p>
                                </div>
                                <div className="px-6 pt-4 pb-">
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


            <TableAqi />

            <div>

            </div>

        </>
    );
}
