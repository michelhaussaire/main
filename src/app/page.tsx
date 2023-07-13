import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <header>
        <h1>Michel Haussaire</h1>
        <p>Soy desarrollador web</p>
      </header>
      <body>
        <h2>Info y Tecnologias</h2>
        <h2>Proyectos</h2>
        <h2>Contacto</h2>
      </body>
      <footer>
        <p>Redes</p>
      </footer>
    </main>
  );
}
