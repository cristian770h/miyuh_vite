import { Link } from "react-router-dom";

export default function SongArtist() {
    return (
        <>
            <div className="bg-white w-[35rem] ml-[16rem] mr-[2rem] h-[29rem] drop-shadow-lg">
                <div className="flex-row">
                    <span className="font-kanit-bold">CANCIONES POPULARES DE JHAYCO</span>
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
                                <img src="src\assets\img\enladeella.png" className="w-full h-full object-cover" />
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
        </>
    )
}