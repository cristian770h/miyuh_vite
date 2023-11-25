import NoticiaDash from "../noticia";
import NavDash from "../navdash";
import AddNoticia from "../add_noticia";

export default function Page_Noticia() {
    return (
        <>
            <div className="flex ">
                <div>
                    <NavDash />
                </div>
                <div className="flex flex-col ml-[rem]">
                    <div>
                        <AddNoticia/>
                    </div>
                    <div className="mt-12">
                        <NoticiaDash />
                    </div>
                </div>
            </div>
        </>
    )
}