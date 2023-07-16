import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-20">
      <header>
        <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
            Michel Haussaire
          </span>
        </h1>
        <p className="text-lg text-center font-normal text-gray-500 lg:text-xl dark:text-gray-400">
          Soy un programador
        </p>
        <div className="text-center mt-3">
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            github
          </button>
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Linkedin
          </button>
        </div>
      </header>
      <section>
        <h3 className="text-2xl font-semibold dark:text-white">
          Info y Tecnologias
        </h3>
      </section>
      <section>
        <h3 className="text-2xl font-semibold dark:text-white">Proyectos</h3>
      </section>
      <section>
        <h3 className="text-2xl font-semibold dark:text-white">Contacto</h3>
      </section>
      <footer>
        <p>Aca van a las redes sociales con todods los links</p>
      </footer>
    </main>
  );
}
