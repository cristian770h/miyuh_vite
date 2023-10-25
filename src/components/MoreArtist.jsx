import { Link } from "react-router-dom";

export default function MasArtistas() {
    return (
        <>
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
        </>
    )
}