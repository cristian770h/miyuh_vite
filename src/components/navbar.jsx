import { Link, Outlet } from "react-router-dom";

export default function Navbar() {
    return (
        <>
            <div className="navbar-container flex-col min-h-0">
                <div className="bg-gray-600 text-black fixed top-0 left-0 w-full flex flex-row justify-between px-20 py-4 items-center z-10">
                    <div>
                        <h1 className="text-2xl font-semibold">
                            <Link to={"/"}>
                                <span className="text-black dark:text-white">MIYUH</span>
                            </Link>
                        </h1>
                    </div>
                    <div className=" ">
                        <ul className="flex flex-row gap-8">
                            <li>
                                <div className="flex flex-row items-center justify-center border-2 p-2 rounded-xl gap-2">
                                    <div className="pl-2 flex items-center justify-center">
                                        <box-icon name="search" color="white"></box-icon>
                                    </div>
                                    <input
                                        className="bg-white outline-none rounded-sm p-1 py-1"
                                        type="search"
                                        placeholder="Buscar ciudad"
                                    ></input>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="flex flex-row">
                        <div className=" flex flex-row items-center px-4 gap-4">
                            <box-icon name='user-circle' type='solid' color='white' size='lg'></box-icon>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-400 text-black fixed top-0 left-0 w-full flex flex-row justify-between px-20 py-4 items-center z-10 mt-[5.2rem]">

                </div>
                <div className="bg-gray-700 text-black fixed top-0 left-0 w-full flex  justify-between px-20 py-3 items-center z-10 mt-[7.2rem] ">
                    <div className="">
                        <ul className="flex flex-row text-white font-kanit px-11 text-1xs">
                            <Link to={"sa"}><li className="px-12 hover:underline">Ahora</li></Link>
                            <li className="px-12 hover:underline">Ahora</li>
                            <li className="px-12 hover:underline">Ahora</li>
                        </ul>
                    </div>
                </div>
                <Outlet />
            </div>
        </>
    );
}