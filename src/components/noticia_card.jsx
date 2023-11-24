import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Noticia_card() {
    const [Noticia, setNoticia] = useState([]);

    useEffect(() => {
        fetchNoticia();
    }, []);

    const fetchNoticia = async () => {
        try {
            const response = await axios.get('http://localhost:3000/Noticias');
            setNoticia(response.data);
        } catch (error) {
            console.error("Error al obtener noticias:", error);
        }
    };

    return (
        <div className="grid grid-cols-3 gap-4 mt-[12rem]">
            {Noticia.map((noticia) => (
                <div className="bg-white-500 border-solid border-gray-200 border-4 rounded-md shadow-lg text-black" key={noticia.id_Noticia}>
                    <div className="relative">
                        <img src={noticia.Img_noticia} alt="" className="w-[30rem] h-[12rem] object-cover rounded-t-md" />
                        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30 rounded-t-md"></div>
                    </div>
                    <div className="p-4">
                        <h2 className="text-lg font-bold text-black mb-2">{noticia.Titulo}</h2>
                        <p className="text-sm text-gray-700">{noticia.Resumen}</p>
                        <div className="mt-4">
                            <Link to={`/noticias/${noticia.id_Noticia}`} className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-full transition duration-300 ease-in-out transform hover:scale-105">
                                Leer más
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
