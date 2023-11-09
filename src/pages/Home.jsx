import { Link } from "react-router-dom";
import Card from "../../components/card";

import CardCelulares from "../../components/cardCelulares";
// import Footer from "../../components/Footer";
import CardInicio from "../../components/cardInicio";
import CardNavegacion from "../../components/cardNavegacion";

export default function Home() {
  return (
    <div className="py-5 flex flex-col">
      <div className="bg-white p-10 flex flex-col items-left gap-16 rounded-2xl h-[26rem] max-w-5xl m-auto">
        <h1 className="text-black font-semibold text-left">
          Mejorando la experiencia <br /> de la música en todo el <br /> mundo
        </h1>
        <div className="flex flex-row justify-center gap-16">
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
      </div>
    
      <div className="bg-[#eef0f2] w-full p-8 mt-10 flex flex-col items-center justify-center gap-8 h-4"></div>
      <Footer />

    </div>
  );
}