import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
export default function BuscarImg() {
    const [datos, setDatos] = useState(null);
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

    return (
        <div className='flex flex-row justify-center items-center object-center ml-72'>
            {datos && (
                
                <div className='flex flex-row gap-12 mx-9 mt-24'>
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
                    <div className=''>
                        <div  ref={mapRef} id='map' style={{ height: '400px' , width:'500px'}} />
                    </div>
                </div>

)}

</div>
    );
}
