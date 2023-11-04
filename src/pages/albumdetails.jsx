import CardAlbum from "../components/card_albums";

export default function AlbumDetails() {
    return (
        <>
            <div className=" flex mt-[8rem] ml-56">
                <div className="w-[349px] h-[349px] drop-shadow-lg">
                    <img src="src\assets\img\timelezz.jpg" alt="" />
                </div>
                <div className=" bg-yellow-900 ml-[1.7rem] mt-[1rem] w-[45rem] h-[12rem]">
                    <div className="text-black font-bold flex">
                        <ul className="px-6 ">
                            <li><span className="text-4xl py-28">TIMELEZZ</span></li>
                            <li className=""><span>Jhay Cortez</span></li>
                            <li><span>2022</span></li>
                        </ul>
                    </div>
                    <div className="bg-white text-black  mt-[15rem] w-[45rem] h-[15rem]">
                        <div className="flex-row">
                            <span className="font-kanit-bold">TRACKLIST</span>
                            <div className="">
                                <table className="table-auto">
                                    <thead>
                                        <tr>
                                            <th className="invisible">Id</th>
                                            <th className="invisible">Client</th>
                                        </tr>
                                    </thead>
                                    <tbody className=" divide-y-2 divide-gray-300 divide-double">
                                        <tr>
                                            <td className="opacity-30">1</td>
                                            <td>Dilema</td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>Tokyo</td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>Esta deja</td>
                                        </tr>
                                        <tr>
                                            <td>4</td>
                                            <td>Esta deja</td>
                                        </tr>
                                        <tr>
                                            <td>5</td>
                                            <td>Esta deja</td>
                                        </tr>
                                        <tr>
                                            <td>6</td>
                                            <td>Esta deja</td>
                                        </tr>
                                        <tr>
                                            <td>7</td>
                                            <td>Esta deja</td>
                                        </tr>
                                        <tr>
                                            <td>8</td>
                                            <td>Esta deja</td>
                                        </tr>
                                        <tr>
                                            <td>9</td>
                                            <td>Esta deja</td>
                                        </tr>
                                        <tr>
                                            <td>10</td>
                                            <td>Esta deja</td>
                                        </tr>
                                        <tr>
                                            <td>11</td>
                                            <td>Esta deja</td>
                                        </tr>
                                        <tr>
                                            <td>12</td>
                                            <td>Esta deja</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className=" w-[67rem] h-[22rem] mt-[29rem] ml-[15rem]">
                <span className="text-4xl font-kanit-bold text-black">MAS ALBUMES DE</span>
                <span className="text-4xl  text-blue-300"> JHAYCO</span>
                <div className=" mt-10 flex px-5 space-x-12">
                <CardAlbum/>
                <CardAlbum/>
                <CardAlbum/>
                <CardAlbum/>
                </div>
            </div>
        </>
    )
}