function Hero() {
  return (
  <div className="flex flex-col items-center p-4">
    <h1 className="m-8 text-3xl font-extrabold text-gray-900 dark:text-white md:text-4xl lg:text-6xl">
      <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Bienvenido a mi espacio digital</span>
    </h1>
    <p className="m-4 text-lg text-center font-normal text-gray-500 lg:text-xl dark:text-gray-400">Hola soy un desarrollador argentino, apacionado por transformar ideas en código, construyendo experiencias web y aplicaciones que impulsen el progreso.</p>
    <div className="text-center mt-4">
      <button
        type="button"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Github
      </button>
      <button
        type="button"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center ml-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Linkedin
      </button>
    </div>
  </div>
  );
}

export default Hero;