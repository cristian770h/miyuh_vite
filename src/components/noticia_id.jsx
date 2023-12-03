import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function NoticiaDetalle() {
    const [Noticia, setNoticia] = useState({});
    const { id_Noticia } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        fetchNoticia();
    }, [id_Noticia]);

    const fetchNoticia = async () => {
        try {
            const response = await axios.get(`http://localhost:3000/Noticias/${id_Noticia}`);
            setNoticia(response.data);
        } catch (error) {
            console.error("Error al cargar la noticia:", error);
            // Si ocurre un error, podrías redirigir a una página de error o manejarlo de otra manera.
            navigate('/error'); // Redirige a una página de error si es necesario
        }
    };

    return (

        <main className="relative w-screen h-40rem mt-[22rem]">
        <div
          className="absolute inset-0 bg-cover bg-center blur-xl"
          style={{ backgroundImage: `url(${Noticia.Img_noticia})` }}
        ></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
          <div className="text-center">
            <img src={Noticia.Img_noticia} className="w-31rem h-22rem mb-4" alt="" />
            <span className="text-black font-bold text-2xl">{Noticia.Titulo}</span>
          </div>
          <div className="text-2xl text-black">{Noticia.Noticia}</div>
        </div>
      </main>
      
    );
}