import axios from "axios";
import { useEffect, useState } from "react";

export default function forecast_card() {

    const [clima, setDatos] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://api.weatherapi.com/v1/forecast.json?key=b09b3aeceb74476391e133322231411&q=mexico&aqi=yes&forecast_day=5&dt=2023-11-27`);
                console.log('Respuesta de la API:', response.data);
                setDatos(response.data); // Ajustado para tomar la respuesta directa
            } catch (error) {
                console.error('Error al obtener datos:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
        </>
    )
}