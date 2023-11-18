import TwitterArtist from "../components/Twitter_api";
import MasArtistas from "../components/MoreArtist";
import Insta from "../components/InstaApi";

export default function Artist() {
    return (
        <>
            <div>
            </div>
            <div className="flex mt-[3rem] text-black">
                <div>

                </div>
                <div className="">
                    <TwitterArtist />
                </div>
            </div>
            <div className="flex mt-[1rem]">
                <div className="text-black  w-[35rem] ml-[16rem] mr-[2rem] h-[29rem] shadow-2xl">
                    <MasArtistas />
                </div>
                <div className="bg-white w-[22rem] ml-[2rem] mr-[6rem] h-[22rem] shadow-xl ">
                    <Insta />
                </div>
            </div>
        </>
    );
}