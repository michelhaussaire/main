import Image from "next/image";
import Header from "../components/Header";
import InfoTec from "../components/InfoTec";
import Proyectos from "../components/Proyectos";
import Contacto from "../components/Contacto";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main>
      <Header/>
      <InfoTec/>
      <Proyectos/>
      <Contacto/>
      <Footer/>
    </main>
  );
}
