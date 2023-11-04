import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CondicionesAtmosfericas = () => {
    const [datos, setDatos] = useState([]);
    const [estadoSeleccionado, setEstadoSeleccionado] = useState('');
    const [estadosUnicos, setEstadosUnicos] = useState([]);

    useEffect(() => {
        // Obtener los nombres únicos de los estados
        const estados = new Set(datos.map((dato) => dato.state));
        setEstadosUnicos(Array.from(estados));
    }, [datos]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://api.datos.gob.mx/v2/condiciones-atmosfericas?pageSize=1000&page=1');
                setDatos(response.data.results);
            } catch (error) {
                console.error('Error al obtener datos:', error);
            }
        };

        fetchData();
    }, []); // El segundo argumento del useEffect asegura que se ejecute solo una vez al montar el componente

    return (
        <div>
            <label htmlFor="estadoSelector" className="block text-sm font-medium text-gray-700">
                Seleccionar Estado:
            </label>
            <select
                id="estadoSelector"
                name="estado"
                className="mt-1 p-2 border rounded-md bg-white dark:bg-gray-800 dark:text-gray-300"
                value={estadoSeleccionado}
                onChange={(e) => setEstadoSeleccionado(e.target.value)}
            >
                <option value="">Seleccionar...</option>
                {estadosUnicos.map((estado, index) => (
                    <option key={index} value={estado}>
                        {estado}
                    </option>
                ))}
            </select>
            <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
                <thead className='text-xs text-gray-900 uppercase dark:bg-gray-700 dark:text-gray-400'>
                    <tr className='border-b dark:border-gray-700'>
                        <th scope='col' className='px-2 py-3 text-center'>Estado</th>
                        <th scope='col' className='px-2 py-3 text-center'>Abreviatura</th>
                        <th scope='col' className='px-2 py-3 text-center'>Ciudad</th>
                        <th scope='col' className='px-2 py-3 text center'>Humedad</th>
                        <th scope='col' className='px-2 py-3 text-center'>Clima</th>
                        <th scope='col' className='px-2 py-3 text-center'>Temperatura</th>
                    </tr>
                </thead>
                <tbody>
                    {datos
                        .filter((dato) => !estadoSeleccionado || dato.state === estadoSeleccionado)
                        .map((dato, index) => (
                            <tr key={index} className={index % 2 === 0 ? 'bg-border-b dark:border-gray-700' : ''}>
                                <td className="px-2 py-3 text-center">{dato.state}</td>
                                <td className="px-2 py-3 text-center">{dato.stateabbr}</td>
                                <td className="px-2 py-3 text-center">{dato.name}</td>
                                <td className="px-2 py-3 text-center">{dato.relativehumidity}%</td>
                                <td className="px-2 py-3 text-center">{dato.skydescriptionlong}</td>
                                <td className="px-2 py-3 text-center">{dato.tempc}°C</td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    );
};

export default CondicionesAtmosfericas;