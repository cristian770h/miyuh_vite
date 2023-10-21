export default function AlbumDetails() {
    return (
        <>
            <div className=" flex mt-[8rem]  ml-56 ">
                <div className="bg-red-500 w-[349px] h-[349px] drop-shadow-lg">
                    <img src="src\assets\img\timelezz.jpg" alt="" />
                </div>
                <div className="bg-green-500 ml-[1.7rem] mt-[1rem] w-[45rem] h-[15rem]">
                    <div className="text-black font-bold ">
                        <span className="text-4xl py-28">TIMELEZZ</span>

                    </div>
                    <div className="bg-white text-black  mt-[15rem] w-[45rem] h-[15rem]">
                        <div className="flex-row">
                            <div className="flex-row">
                                <span className="font-kanit-bold">TRACKLIST</span>
                                <div className="divide-y divide-gray-200">
                                    <div className="flex flex-row ">
                                        <div className="bg-green-500 mt-[1.4rem] ml-[1rem] w-[25rem] h-[2rem]  items-center overflow-hidden gap-32">
                                            <ul className="">
                                                <li className=""> <span className=" opacity-50">1</span>
                                                    <span className=" text-left">En la de ella</span></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div></div>
                </div>
            </div>

        </>
    )
}