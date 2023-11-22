import axios from "axios";
import { useState, useEffect } from "react";


export default function Noticia_component() {
    const [Noticia, setNoticia] = useState([])
    useEffect(() => {
        fetchNoticia();

    }, [])

    const fetchNoticia = async () => {
        const response = await axios.get('http://localhost:3000/Noticias')
        setNoticia(response.data)
        console.log(response.data)
        console.log('Datos de la api')
        console.log(response)


    }


    return (
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                <div className="bg-white-500 border-solid border-gray-200 border-4 rounded-md w-[25rem] ml-[5rem] mr-[6rem] mt-[12rem] shadow-xl drop-shadow-lg text-black ">
                    {Noticia.map((noticia, index) => (
                        <div className='flex flex-col row-span-2 mb-12' key={noticia.id}>
                            <div className="mt-12">
                                <img src={noticia.Img_noticia} alt="" className="w-[20rem] h-[12rem] ml-12" />
                            </div>
                            <div className="text-md justify-center font-bold mt-12 ml-7">
                                <span>{noticia.Titulo}</span>
                            </div>
                            <div className="mt-[1rem] text-white     ">
                                <button className="w-[24rem]">Hola</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}