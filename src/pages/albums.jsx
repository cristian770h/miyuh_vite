import { Link } from "react-router-dom"
import { useEffect, useState } from "react";
import axios from "axios";

export default function Albums() {
    const [Artist, setArtist] = useState([]);
    useEffect(() => {
        fetchArtist();
    }, []);
    const fetchArtist= async () => {
        const response = await axios.get('https://api.musixmatch.com/ws/1.1/artist.albums.get?artist_id=1039&s_release_date=desc&g_album_name=1&apikey=ce0f47cb13b8b37026ffe0daea62678c');
                    setArtist(response.data);
                    console.log(response.data);
                    console.log('Datos de la api')
                    console.log(response)
    }
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