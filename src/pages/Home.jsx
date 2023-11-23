import Navbar from "../components/navbar";
import CardNavegacion from "../components/cardNavegacion";
import CardPrincipal from "../components/cardPrincipal";
import Weather from "../components/Weather_comp";

export default function Home() {
  return (
    <div className="flex flex-col gap-36 px-40">
      <Weather />
    </div>


  );
}
