import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function MasArtistas() {
    const [related, setRelated] = useState([]);
    const [showCount, setShowCount] = useState(4);
    const [error, setError] = useState(null);

    useEffect(() => {
        const apiUrl = 'https://api.spotify.com/v1/artists/6nVcHLIgY5pE2YCl8ubca1/related-artists';
        const config = {
            headers: {
                Authorization: `Bearer BQAZgPAlcpQaTk4lOj5JER4RhO2l2VXvWghmnfYPmmb559RlwJYW1eQk6m4cYPfViHxPw5CkckfICdq5WhVKSEQgMxZkN7gApRr9rTVbG4Bw0QUe9b4`
            },
        };

        axios.get(apiUrl, config)
        .then((response) => {
            setRelated(response.data.artists); // Actualizar el estado con los artistas relacionados
        })
        .catch((error) => {
            setError(error);
        });
    }, []);

    return (
        <>
            <div className="flex-row">
                <span className="font-kanit-bold">ARTISTAS RELACIONADOS</span>
                <div className="divide-y divide-gray-200">
                    {related.slice(0, showCount).map((artist) => (
                        <div key={artist.id} className="flex">
                            <div className="mt-[1.4rem] ml-[1rem] w-[4.1rem] h-[4.1rem] items-center overflow-hidden rounded-full">
                                <img src={artist.images[0]?.url} alt={artist.name} className="w-full h-full object-cover" />
                            </div>
                            <div className="mt-[1.4rem] ml-[1rem] w-[15rem] h-[4.1rem] font-kanit font-regular ">
                                <ul>
                                    <li><span>{artist.name}</span></li>
                                </ul>
                            </div>
                        </div>
                    ))}
                    <div className="text-center pt-[2rem]">
                        {showCount < related.length && (
                            <button onClick={() => setShowCount(related.length)} className="text-black">CARGAR MAS</button>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}