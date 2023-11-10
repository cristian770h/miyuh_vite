import Navbar from "../components/navbar";
import CardNavegacion from "../components/cardNavegacion";
import CardPrincipal from "../components/cardPrincipal";

export default function Home() {
    return (
        <div className="flex flex-col gap-36 px-40">
  <div className="relative z-10"> {/* Asegúrate de que el z-index sea mayor para la barra de navegación */}</div>
  <div className="relative z-0"> {/* Asegúrate de que el z-index sea menor para el contenido */}
    <CardPrincipal />
  </div>
  <div className="relative z-0"> {/* Asegúrate de que el z-index sea menor para el contenido */}
    <CardNavegacion 
    imagen={"src/assets/img/google-map.jpg"}
    texto={"Lo que buscas"}
    texto2="Los locales de musica mas cercanos, haz click para comenzar. "/>
  </div>
  <div className="relative z-0"> {/* Asegúrate de que el z-index sea menor para el contenido */}
    <CardNavegacion 
    imagen={"src/assets/img/tutoriales.jpeg"}
    texto="Tutoriales"
    texto2={"Aprende facil, rapido y sencillo con los tutoriales de alta eficiencia."}
    direccion={"/YT"}/>
  </div>
  <div className="relative z-0"> {/* Asegúrate de que el z-index sea menor para el contenido */}
    <CardNavegacion 
    imagen={"src/assets/img/artistas.jpeg"}
    texto={"Imagenes de tus artistas"}
    texto2={"La mejores fotos de tus artistas las encuentras en este lugar."}
    direccion={"/img"}/>
  </div>
</div>


    );
}
