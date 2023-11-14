import { useState, useEffect } from "react";
import CardAlbum from "../components/card_albums";
import axios from "axios";
export default function AlbumDetails() {
    const [albumDetails, setAlbumDetails] = useState(null);
    const [tracks, setTracks] = useState([]);
    const [error, setError] = useState(null);
    useEffect(() => {
        const albumId = '3AwzfcsXeljU7JkG5GQn8Y'; // ID del álbum
        const apiUrl = `https://api.spotify.com/v1/albums/3AwzfcsXeljU7JkG5GQn8Y`;
        const config = {
            headers: {
                Authorization: `Bearer BQAqUsakqTfPQ0TlTiPcJyX33ESdaDVrhLrObDuvMZsZ0dbOkaQrvEIgkqn7ZCFRjYiw3yVcsfpKIPRORsF5oHWTm-CldpM2VLskoYvKdRt-M-53sls`
            },
        };

        axios.get(apiUrl, config)
            .then((response) => {
                setAlbumDetails(response.data); // Establecer detalles del álbum
                setTracks(response.data.tracks.items); // Establecer pistas del álbum
            })
            .catch((error) => {
                setError(error);
            });
    }, []);

    if (!albumDetails) return <div>Cargando...</div>;

    const albumImage = albumDetails.images && albumDetails.images[0] ? albumDetails.images[0].url : ''

    return (
        <>
            <div className="flex mt-[8rem] ml-56">
                {albumImage && (
                    <div className="w-[349px] h-[349px] drop-shadow-lg">
                        <img src={albumImage} alt={albumDetails.name} />
                    </div>
                )}
                <div className=" bg-yellow-900 ml-[1.7rem] mt-[1rem] w-[45rem] h-[12rem]">
  
                    <div className="text-black font-bold flex">
                        <ul className="px-6 ">
                        <li><span className="text-4xl py-28">{albumDetails.name}</span></li>
                            <li><span>{albumDetails.artists.map(artist => artist.name).join(', ')}</span></li>
                            <li><span>{albumDetails.release_date}</span></li>
                        </ul>
                    </div>
                                    <div className="bg-white text-black  mt-[15rem] w-[45rem] h-[15rem]">
                        <div className="flex-row">
                            <span className="font-kanit-bold">TRACKLIST</span>
                            <div>
                                <table className="table-auto">
                                    <thead>
                                        <tr>
                                            <th className="invisible">Id</th>
                                            <th className="invisible">Canción</th>
                                        </tr>
                                    </thead>
                                    {tracks.map((track, index) => (
                                        <tbody key={track.id} className="divide-y-2 divide-gray-500 divide-double">
                                            <tr>
                                                <td className="opacity-30">{index + 1}</td>
                                                <td>{track.name}</td>
                                            </tr>
                                        </tbody>
                                    ))}
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className=" w-[67rem] h-[22rem] mt-[29rem] ml-[15rem]">
                <span className="text-4xl font-kanit-bold text-black">MAS ALBUMES DE</span>
                <span className="text-4xl  text-blue-300"> JHAYCO</span>
                <div className=" mt-10 flex px-5 space-x-12">
                    <CardAlbum />
                    <CardAlbum />
                    <CardAlbum />
                    <CardAlbum />
                </div>
            </div>
        </>
    )
}