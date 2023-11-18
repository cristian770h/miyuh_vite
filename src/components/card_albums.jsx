import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CardAlbum = () => {
  const [albums, setAlbums] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const apiUrl = 'https://api.spotify.com/v1/albums/3AwzfcsXeljU7JkG5GQn8Y';
    const config = {
      headers: {
        Authorization: `Bearer  BQBxFNsfanUJDeB6HushOUAe_Soc1Ovo_kPnCy2qOg9kcXgmA86Tz6SE7Xcb_ZplUTY_hsOTk_S7BaEcBOBvM8m5h7e0Rk_A5har96EZATbogrNm8vE`
      },
    };

    axios.get(apiUrl, config)
    .then((response) => {
      console.log('Respuesta exitosa:', response.data);
      // Establecer el álbum como un arreglo que contiene un solo elemento
      setAlbums([response.data]);
    })
    .catch((error) => {
      // ... manejo de errores ...
    });
}, []);

  return (
    <div>
      {albums.map((album, index) => (
        <div key={index} className="max-w-[13rem] overflow-hidden">
          <img className="w-full drop-shadow-lg" src={album.images[0].url} alt={album.name} />
          <div className="px-6 py-4">
            <div className="text-black font-bold text-xl mb-2">{album.name}</div>
            <p className="text-black text-base">
              {album.release_date}
            </p>
          </div>
        </div>
      ))}
      {error && <p>Error cargando los álbumes</p>}
    </div>
  );
};

export default CardAlbum;
