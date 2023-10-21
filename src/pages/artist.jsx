import { Link } from "react-router-dom";

export default function Artist() {
    return (
        <>
            <div>
                <div className="mt-[8rem] w-[61rem] ml-64 h-[25rem] flex portada">
                    <div className=" border-4 border-solid mt-[11.5rem] border-[#EBE56E] ml-[4.5rem] w-[13rem] h-[13rem] rounded-full items-center overflow-hidden">
                        <img src="src\assets\img\channels4_profile.jpg" className="w-full h-full  object-cover" />
                    </div>
                </div>
                <div className="bg-white  w-[61rem] ml-64 h-[3rem] drop-shadow-lg ">
                    <ul className="flex flex-row text-black font-kanit px-8">
                        <li className=" underline decoration-[#86CDEB] px-4"><span>VISTA GENERAL</span></li>
                        <li className=" px-4"><span>ALBUMES</span></li>
                        <li className="px-4"><span>MAS INFORMACIÓN</span></li>
                    </ul>
                </div>
            </div>
            <div className="flex mt-[3rem] text-black">
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
                <div className="bg-white  w-[22rem] ml-[2rem] mr-[6rem] h-[29rem] shadow-xl">
                    <div className="flex-row">
                        <span className="font-kanit-bold">Twitter</span>
                        <div className="divide-y divide-gray-200">
                            <div className="flex">
                                <div className="mt-[1.4rem] ml-[1rem] w-[3.5rem] h-[3.5rem]  items-center overflow-hidden rounded-full">
                                    <img src="src\assets\img\rauw.jpg" className="w-full h-full  object-cover" />
                                </div>
                                <div className=" mt-[1.4rem] ml-[1rem] w-[15rem] h-[4.1rem] font-kanit font-regular ">
                                    <ul>
                                        <li><span>Rauw Alejandro</span></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="flex">
                                <div className="mt-[1.4rem] ml-[1rem] w-[3.5rem] h-[3.5rem]  items-center overflow-hidden rounded-full">
                                    <img src="src\assets\img\rauw.jpg" className="w-full h-full  object-cover" />
                                </div>
                                <div className=" mt-[1.4rem] ml-[1rem] w-[15rem] h-[4.1rem] font-kanit font-regular ">
                                    <ul>
                                        <li><span>Rauw Alejandro</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex mt-[1rem]">
                <div className="text-black  w-[35rem] ml-[16rem] mr-[2rem] h-[29rem] shadow-2xl">
                    <div className="flex-row">
                        <span className="font-kanit-bold">ARTISTAS RELACIONADOS</span>
                        <div className="divide-y divide-gray-200">
                            <div className="flex">
                                <div className="mt-[1.4rem] ml-[1rem] w-[4.1rem] h-[4.1rem]  items-center overflow-hidden rounded-full">
                                    <img src="src\assets\img\rauw.jpg" className="w-full h-full  object-cover" />
                                </div>
                                <div className=" mt-[1.4rem] ml-[1rem] w-[15rem] h-[4.1rem] font-kanit font-regular ">
                                    <ul>
                                        <li><span>Rauw Alejandro</span></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="flex">
                                <div className="mt-[1.4rem] ml-[1rem] w-[4.1rem] h-[4.1rem]  items-center overflow-hidden rounded-full">
                                    <img src="src\assets\img\rauw.jpg" className="w-full h-full  object-cover" />
                                </div>
                                <div className=" mt-[1.4rem] ml-[1rem] w-[15rem] h-[4.1rem] font-kanit font-regular ">
                                    <ul>
                                        <li><span>Rauw Alejandro</span></li>

                                    </ul>
                                </div>
                            </div>
                            <div className="flex">
                                <div className="mt-[1.4rem] ml-[1rem] w-[4.1rem] h-[4.1rem]  items-center overflow-hidden rounded-full">
                                    <img src="src\assets\img\rauw.jpg" className="w-full h-full  object-cover" />
                                </div>
                                <div className=" mt-[1.4rem] ml-[1rem] w-[15rem] h-[4.1rem] font-kanit font-regular ">
                                    <ul>
                                        <li><span>Rauw Alejandro</span></li>

                                    </ul>
                                </div>
                            </div>
                            <div className="flex">
                                <div className="mt-[1.4rem] ml-[1rem] w-[4.1rem] h-[4.1rem]  items-center overflow-hidden rounded-full">
                                    <img src="src\assets\img\rauw.jpg" className="w-full h-full  object-cover" />
                                </div>
                                <div className=" mt-[1.4rem] ml-[1rem] w-[15rem] h-[4.1rem] font-kanit font-regular ">
                                    <ul>
                                        <li><span>Rauw Alejandro</span></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="text-center pt-[2rem]">
                                <Link to=""><span className="text-black">CARGAR MAS</span></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-red-500  w-[22rem] ml-[2rem] mr-[6rem] h-[22rem] shadow-xl "></div>
            </div>
        </>
    );
}