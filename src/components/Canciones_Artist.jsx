import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
export default function SongArtist() {
    const [tracks, setTracks] = useState([]);
    const [showCount, setShowCount] = useState(5); // Estado para controlar cuántas pistas mostrar
    const [showLess, setShowLess] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const apiUrl = 'https://api.spotify.com/v1/artists/6nVcHLIgY5pE2YCl8ubca1/top-tracks?market=es';
        const config = {
            headers: {
                Authorization: `Bearer BQAZgPAlcpQaTk4lOj5JER4RhO2l2VXvWghmnfYPmmb559RlwJYW1eQk6m4cYPfViHxPw5CkckfICdq5WhVKSEQgMxZkN7gApRr9rTVbG4Bw0QUe9b4`
            },
        };

        axios.get(apiUrl, config)
        .then((response) => {
            setTracks(response.data.tracks); // Establecer las pistas directamente
        })
        .catch((error) => {
            setError(error);
        });
    }, []);

    const handleLoadMore = () => {
        setShowCount(tracks.length);
        setShowLess(true); // Muestra el botón de "Mostrar menos"
    };

    const handleShowLess = () => {
        setShowCount(5);
        setShowLess(false); // Oculta el botón de "Mostrar menos"
    };

    return (
        <>
            <div className="bg-white w-[35rem] ml-[16rem] mr-[2rem] ">
                <div className="flex-row">
                    <span className="font-kanit-bold">CANCIONES POPULARES DE JHAYCO</span>
                    <div className="divide-y divide-gray-200">
                    {tracks.slice(0, showCount).map((track, index) => (
                            <Link to={`/cancion/${track.id}`} key={index} className="flex">
                                {/* Asegúrate de que la pista tenga imágenes disponibles */}
                                <div className="mt-[1.4rem] ml-[1rem] w-[4.1rem] h-[4.1rem] items-center overflow-hidden">
                                    <img src={track.album.images[0]?.url} className="w-full h-full object-cover" alt={track.name}/>
                                </div>
                                <div className="mt-[1.4rem] ml-[1rem] w-[15rem] h-[4.1rem] font-kanit font-regular ">
                                    <ul>
                                        <li><span>{track.name}</span></li>
                                        <li><span>{track.artists.map(artist => artist.name).join(', ')}</span></li>
                                    </ul>
                                </div>
                            </Link>
                        ))}
                        {!showLess && showCount < tracks.length && (
                            <div className="text-center pt-[2rem]">
                                <button onClick={handleLoadMore} className="text-black">CARGAR MAS</button>
                            </div>
                        )}
                        {showLess && (
                            <div className="text-center pt-[2rem]">
                                <button onClick={handleShowLess} className="text-black">MOSTRAR MENOS</button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}