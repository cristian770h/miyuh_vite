import axios from "axios";
import { useEffect } from "react"


export default function CardAlbum() {
    
    
    
    
    useEffect(() =>{
        const fetchData = async() =>{
            try{
            const response= await axios.get(`https://api.musixmatch.com/ws/1.1//chart.tracks.get?chart_name=top&page=1&page_size=10&country=mx&apikey=${process.env.REACT_APP_API_MUSICXMATCH}`);
                setDatos(response.data.results);
        }catch(error){
            console.error('Error al obtener datos:',error)
        }
    }
    })

    ce0f47cb13b8b37026ffe0daea62678c
    https://api.musixmatch.com/ws/1.1/

    return (
        <>
            <div className=" max-w-[13rem] overflow-hidden ">
                <img className="w-full drop-shadow-lg" src="src\assets\img\timelezz.jpg" />
                    <div class="px-6 py-4">
                        <div className="text-black font-bold text-xl mb-2"><span>TIMELEZZ</span></div>
                        <p className="text-black text-base">
                            2022
                        </p>
                    </div>
            </div>
        </>
    )
}