import Biography_artist from "../components/Biography_Artist";
import RedesSociales from "../components/Redes_sociales";
import ImgMasInfo from "../components/img_moreinfo";


export default function Moreinfo() {
    return (
        <>
            <div className="flex mt-[3rem] text-black">
                <div className="bg-white w-[35rem] ml-[16rem] mr-[2rem] h-[29rem] drop-shadow-lg">
                    <Biography_artist/>
                </div>
                <div className=" flex-col">
                    <ImgMasInfo/>
                    <RedesSociales/>
                </div>
            </div>

        </>
    )
}