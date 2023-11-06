import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function BuscarImg() {
    const [valor, setValor] = useState('');
    const [resultados, setResultados] = useState([]);

    const API_KEY = 'jCw-R1Y-OVC2_H-u30b2Qc8hUj5mOCyOFvOBWNBQG8k';

    // Función para buscar imágenes, se llama cuando el usuario presiona el botón "Buscar"
    const buscarResultados = async () => {
        try {
            const response = await axios.get(`https://api.unsplash.com/search/photos/?client_id=${API_KEY}&query=${valor}&per_page=20`);
            setResultados(response.data.results);
        } catch (error) {
            console.error('Error al obtener datos:', error);
        }
    };

    // Esta es la estructura básica de tu componente, con la adición del botón de búsqueda y la lógica para mostrar los resultados.
    return (
        <>
            <div className="flex justify-center mt-4"> {/* Centrar el buscador horizontalmente y darle un margen superior */}
                <div className="w-full max-w-xl relative"> {/* Ancho completo con un ancho máximo establecido y posicionamiento relativo para el botón */}
                    <input
                        type="search"
                        onChange={e => setValor(e.target.value)}
                        id="search"
                        className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Buscar"
                        required
                    />
                    <button
                        type="button"
                        onClick={buscarResultados}
                        className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
                    >
                        Buscar
                    </button>
                </div>
            </div>
            {/* Asegurarse de que la galería de imágenes también esté centrada y sea responsiva */}
            <div className="flex justify-center mt-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4"> {/* Columnas responsivas según el tamaño de la pantalla */}
                    {resultados.map((elemento, indice) => (
                        <img className="w-full h-auto object-cover m-2" key={indice} src={elemento.urls.regular} alt={elemento.alt_description} />
                    ))}
                </div>
            </div>

        </>
    );
}
