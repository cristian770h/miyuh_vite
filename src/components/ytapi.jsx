import React, { useState } from 'react';
import axios from 'axios';

export default function YoutubeApi() {
    const [valor, setValor] = useState('');
    const [resultados, setResultados] = useState([]);

    const API_KEY = 'AIzaSyAVWSaluIQrJKLn77TstdzbCPkYwO6JOUI';

    const buscarResultados = async () => {
        try {
            const response = await axios.get(`https://www.googleapis.com/youtube/v3/search`, {
                params: {
                    part: 'snippet',
                    type: 'video',
                    q: valor,
                    maxResults: 10,
                    key: API_KEY,
                }
            });
            setResultados(response.data.items);
        } catch (error) {
            console.error('Error al obtener datos:', error);
        }
    };

    return (
        <>
            <div className="flex justify-center mt-4">
                <div className="w-full max-w-xl relative">
                    <input
                        type="search"
                        onChange={e => setValor(e.target.value)}
                        id="search"
                        className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Buscar en YouTube"
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

            <div className="flex justify-center mt-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                    {resultados.map((video, index) => (
                        <div key={video.id.videoId} className="bg-white shadow-md rounded p-4">
                            <img className="w-full h-40 object-cover rounded" src={video.snippet.thumbnails.medium.url} alt='' />
                            <h3 className="font-bold text-black">{video.snippet.title}</h3>
                            <p>{new Date(video.snippet.publishedAt).toLocaleDateString()}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}