import { Link } from "react-router-dom";
export default function CardNavegacion({ texto, texto2, imagen, direccion}) {
    return (

        <div class="bg-gray-200 flex font-sans rounded-xl border-2 border-blue-400">
            <div class="flex-none w-56  relative">
                <img src={imagen} alt="" class="absolute inset-0 w-full h-full object-cover rounded-lg" loading="lazy" />
            </div>
            <form class="flex-auto p-6">
                <h1 class=" font-medium text-slate-900 text-left">
                    {texto}
                </h1>
                <p class="w-full flex-none text-sm font-medium text-slate-700 mt-16">
                    {texto2}
                </p>
                <div class="flex items-baseline mt-4 mb-6 pb-6 border-b border-blue-400"></div>
                <div class="flex mb-5 text-sm font-medium">
                    <button class="h-10 px-6 font-semibold rounded-xl bg-white text-slate-900" type="submit">
                        <span>
                            <Link to={direccion}>Ver mas</Link>
                        </span>
                    </button>
                </div>
            </form>
            <div className="absolute w-full h-3 bottom-0 left-0 bg-gradient-to-tl from-blue-400 to-transparent rounded-xl"></div>

        </div>

    );
}                                                                                                                 