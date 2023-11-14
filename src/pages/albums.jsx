import { Link } from "react-router-dom"
import { useEffect, useState } from "react";
import axios from "axios";

export default function Albums() {
    const [albums, setAlbums] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const apiUrl = 'https://api.spotify.com/v1/albums?ids=6nVcHLIgY5pE2YCl8ubca1%3AwzfcsXeljU7JkG5GQn8Y%2a2LGFK2TeN4fAKm1ZOc1I'
    const config = {
      headers: {
        Authorization: `Bearer  BQAZgPAlcpQaTk4lOj5JER4RhO2l2VXvWghmnfYPmmb559RlwJYW1eQk6m4cYPfViHxPw5CkckfICdq5WhVKSEQgMxZkN7gApRr9rTVbG4Bw0QUe9b4`
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
        <>
            <div className="flex mt-[3rem] text-black">
                <div className="bg-white w-[61rem] ml-[16rem] mr-[2rem] h-[29rem] drop-shadow-lg">
                    <div className="flex-row">
                        <span className="font-kanit-bold">ALBUMS</span>
                        <div className="divide-y divide-gray-200">
                            <div className="flex">
                                <div className="mt-[1.4rem] ml-[1rem] w-[4.1rem] h-[4.1rem]  items-center overflow-hidden">
                                    <img src="src\assets\img\enladeella.png" className="w-full h-full  object-cover" />
                                </div>
                                <div className=" mt-[1.4rem] ml-[1rem] w-[15rem] h-[4.1rem] font-kanit font-regular ">
                                    <ul>
                                        <li><span>En la de ella</span></li>
                                        <li><span>asdsa</span></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="flex">
                                <div className="mt-[1.4rem] ml-[1rem] w-[4.1rem] h-[4.1rem]  items-center overflow-hidden">
                                    <img src="src\assets\img\enladeella.png" className="w-full h-full  object-cover" />
                                </div>
                                <div className=" mt-[1.4rem] ml-[1rem] w-[15rem] h-[4.1rem] font-kanit font-regular ">
                                    <ul>
                                        <li><span>En la de ella</span></li>
                                        <li><span>asdsa</span></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="flex">
                                <div className="mt-[1.4rem] ml-[1rem] w-[4.1rem] h-[4.1rem]  items-center overflow-hidden">
                                    <img src="src\assets\img\enladeella.png" className="w-full h-full  object-cover" />
                                </div>
                                <div className=" mt-[1.4rem] ml-[1rem] w-[15rem] h-[4.1rem] font-kanit font-regular ">
                                    <ul>
                                        <li><span>En la de ella</span></li>
                                        <li><span>asdsa</span></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="flex">
                                <div className="mt-[1.4rem] ml-[1rem] w-[4.1rem] h-[4.1rem]  items-center overflow-hidden">
                                    <img src="src\assets\img\enladeella.png" className="w-full h-full  object-cover" />
                                </div>
                                <div className=" mt-[1.4rem] ml-[1rem] w-[15rem] h-[4.1rem] font-kanit font-regular ">
                                    <ul>
                                        <li><span>En la de ella</span></li>
                                        <li><span>asdsa</span></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="text-center pt-[2rem]">
                                <Link to=""><span className="text-black">CARGAR MAS</span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}