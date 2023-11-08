import axios from "axios";
import { useEffect, useState } from "react"


export default function CardAlbum() {


    const ApiMusic = 'ce0f47cb13b8b37026ffe0daea62678c';

    /*useEffect(() =>{
        const fetchData = async() =>{
            try{
            const response= await axios.get('');
                setDatos(response.data.results);
                
                console.log(response);
                console.log(data);
                console.log(results);
        }catch(error){
            console.error('Error al obtener datos:',error)
        }
    }
    })*/

    const [Users, setUsers] = useState([]);
    useEffect(() => {
        fetchUsers();
    }, []);
    const fetchUsers = async () => {
        const response = await axios.get('https://api.musixmatch.com/ws/1.1//artist.albums.get?artist_id=1039&s_release_date=desc&g_album_name=1&country=mx&apikey=ce0f47cb13b8b37026ffe0daea62678c');
        setUsers(response.data);
        console.log(response.data);
        console.log('Datos de la api')
        console.log(response)
    }
    return (
        <>
            <div className=" max-w-[13rem] overflow-hidden ">
                <img className="w-full drop-shadow-lg" src="src\assets\img\timelezz.jpg" />
                <div className="px-6 py-4">
                    <div className="text-black font-bold text-xl mb-2"><span>TIMELEZZ</span></div>
                    <p className="text-black text-base">
                        2022
                    </p>
                </div>
            </div>
        </>
    )
}