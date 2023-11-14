import React, { useState } from 'react';
import axios from 'axios';

export default function TranslateComponent() {
    const [translation, setTranslation,valor] = useState('');
    const [palabra, setPalabra] = useState('');

    const translateText = async () => {
        const encodedParams = new URLSearchParams();
        encodedParams.append('source_language', 'en');
        encodedParams.append('target_language', 'es');
        encodedParams.append('text', palabra);

        const options = {
            method: 'POST',
            url: 'https://text-translator2.p.rapidapi.com/translate',
            headers: {
                'content-type': 'application/x-www-form-urlencoded',
                'X-RapidAPI-Key': 'c7a4113ebamshf1bc0c6815d2b3ap19c624jsn100747368e6a',
                'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com'
            },
            data: encodedParams,
        };

        try {
            const response = await axios.request(options);
            console.log('API Response:', response.data);

            if (response.data && response.data.translatedText) {
                setTranslation(response.data.translatedText);
            } else {
                console.log('No se encontró "translatedText" en la respuesta:', response.data);
                setTranslation('Error: no se pudo obtener la traducción.');
            }
        } catch (error) {
            console.error('Error en la solicitud:', error);
            setTranslation('Error al traducir el texto.');
        }
    };

    return (
        <div>
            <input
                type="search"
                onChange={(e) => setPalabra(e.target.value)}
                id="search"
                className="block w-[10.5rem] h-[1rem] p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Introduce texto para traducir"
                required
            />
            <button className='bg-blue-500 w-[6.5rem] h-[2rem]' onClick={translateText}>Translate</button>
			<div>
                {translation && <h1>{translation}</h1>}
            </div>
        </div>
    );
}
