import CardInicio from "./cardInicio";

export default function CardPrincipal() {
    return (

<div className="py-10 px-10 rounded-xl border-2 border-gray-300">
                <h1 className="text-black font-semibold text-left ">
                    MEJORANDO LA EXPERIENCIA <br /> DE LA MUSICA EN TODO EL <br /> MUNDO
                </h1>
                <div className="flex flex-row justify-center gap-16 pt-10">
                    <div>
                        <CardInicio
                            texto="Ecualiza tu audio"
                            vista={<box-icon name='deezer' type='logo' animation='burst' size='lg' ></box-icon>}
                        />
                    </div>
                    <div>
                        <CardInicio
                            texto="Efectos de sonido"
                            vista={<box-icon name='volume-full' animation='tada' size='lg' ></box-icon>}
                        />
                    </div>
                    <div>
                        <CardInicio
                            texto="Lo mas top"
                            vista={<box-icon name='medal' animation='tada' size='lg' ></box-icon>}
                        />
                    </div>
                    <div>
                        <CardInicio
                            texto="Partituras"
                            vista={<box-icon name='book-content' animation='burst' size='lg' ></box-icon>}
                        />
                    </div>
                </div>
                <div className="absolute w-full h-4 bottom-0 left-0 bg-gradient-to-t from-gray-300 to-transparent rounded-xl"></div>
            
            </div>
                );
            } 