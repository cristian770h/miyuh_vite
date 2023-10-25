

export default function PortadaArtist() {
    return (
        <>
            <div className="mt-[8rem] w-[61rem] ml-64 h-[25rem] flex portada">
                <div className="border-4 border-solid mt-[11.5rem] border-[#EBE56E] ml-[4.5rem] w-[13rem] h-[13rem] rounded-full items-center overflow-hidden">
                    <img src="src\assets\img\channels4_profile.jpg" className="w-full h-full  object-cover" />
                    
                </div>
                <div className="text-black font-kanit-bold  ">
                    <span>JHAYCO</span>
                </div>
            </div>
            <div className="bg-white w-[61rem] ml-64 h-[3rem] drop-shadow-lg ">
                <ul className="flex flex-row text-black font-kanit px-8">
                    <li className=" underline decoration-[#86CDEB] px-4"><span>VISTA GENERAL</span></li>
                    <li className=" px-4"><span>ALBUMES</span></li>
                    <li className="px-4"><span>MAS INFORMACIÓN</span></li>
                </ul>
            </div>
        </>
    )
}