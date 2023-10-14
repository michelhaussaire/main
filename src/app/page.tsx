import Image from "next/image";
import Navbar from "../components/Navbar";
import Hero from "@/components/Hero";
import Proyectos from "../components/Proyectos";
import Contacto from "../components/Contacto";
import Footer from "../components/Footer";
import Informacion from "../components/Informacion";

export default function Home() {
  return (
    <main>
      <Navbar/>
      <Hero/>
      <Informacion/>
      <Proyectos/>
      <Contacto/>
      <Footer/>
    </main>
  );
}
