import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { ThemeContextUpdate } from "./contexts/ThemeContext";

function App() {
  return (
    <ThemeContextUpdate>
      <Navbar />
      <main id="home" className="flex flex-col gap-10 my-10">
        <section className="relative flex justify-center items-center">
          <div className="absolute flex flex-col text-center gap-4">
            <h1 className="text-white text-5xl capitalize">leandro elverdi</h1>
            <p className="text-white text-4xl capitalize">desarrollador web</p>
          </div>
          <img
            className="h-screen w-full object-cover"
            src="./images/hero-image.jpg"
            alt="Banner"
          />
        </section>
        <section
          id="skills"
          className="container mx-auto bg-neutral-400 rounded-md p-6"
        >
          <h2 className="text-4xl text-center">Tecnologias</h2>
          <h3 className="text-white text-2xl">Herramientas</h3>
          <div className="flex flex-wrap [&>img]:h-24">
            <img src="/icons/git-logo.svg" alt="Git" />
            <img src="/icons/vscode-logo.svg" alt="VScode" />
          </div>
          <h3 className="text-white text-2xl">Front End</h3>
          <div className="flex flex-wrap [&>img]:h-24">
            <img src="/icons/html5-logo.svg" alt="HTML" />
            <img src="/icons/css3-logo.svg" alt="CSS" />
            <img src="/icons/javascript-logo.svg" alt="JavaScript" />
            <img src="/icons/sass-logo.svg" alt="Sass" />
            <img src="/icons/bootstrap-logo.svg" alt="Bootstrap" />
            <img src="/icons/tailwind-logo.svg" alt="Tailwind" />
            <img src="/icons/jquery-logo.svg" alt="Jquery" />
            <img src="/icons/react-logo.svg" alt="React" />
          </div>
          <h3 className="text-white text-2xl">Back End</h3>
          <div className="flex flex-wrap [&>img]:h-24">
            <img src="/icons/python-logo.svg" alt="Python" />
            <img src="/icons/nodejs-logo.svg" alt="NodeJS" />
            <img src="/icons/expressjs-logo.svg" alt="ExpressJS" />
            <img src="/icons/laravel-logo.svg" alt="Laravel" />
            <img src="/icons/php-logo.svg" alt="PHP" />
          </div>
          <h3 className="text-white text-2xl">Bases de datos</h3>
          <div className="flex flex-wrap [&>img]:h-24">
            <img src="/icons/mysql-logo.svg" alt="MySQL" />
            <img src="/icons/mongo-logo.svg" alt="MondoDB" />
          </div>
        </section>

        <section
          id="projects"
          className="container mx-auto bg-neutral-400 rounded-md p-6"
        >
          <h2 className="text-4xl text-center">Proyectos</h2>
          <b>Estos son algunos de mis proyectos</b>
          <div></div>
        </section>

        <section
          id="about-me"
          className="container mx-auto bg-neutral-400 rounded-md p-6"
        >
          <h2 className="text-4xl text-center">Sobre mi</h2>
          <div className="flex flex-wrap justify-center mt-5 md:flex-nowrap items-center gap-6">
            <img className="rounded-full h-60" src="/images/perfil.png" alt="Perfil" />
            <p className="text-2xl">
              Desde muy pequeño me intereso la programación y actualmente estoy
              dedicandole casi tiempo completo a mejorar mis habilidades, soy
              muy detallista a la hora de realizar mis proyectos e intento
              siempre tener las mejores practicas a la hora de escribir mi
              codigo para dia a dia mejorar como programador.
            </p>
          </div>
        </section>

        <section
          id="contact-me"
          className="container mx-auto bg-neutral-400 rounded-md p-6"
        >
          <h2 className="text-4xl text-center">Contactame</h2>
          <div className="flex flex-wrap justify-center mt-10 [&>img]:h-16">
            <img src="/icons/linkedin-logo.svg" alt="Linkedin" />
            <img src="/icons/github-logo.svg" alt="GitHub" />
          </div>
        </section>
      </main>
      <Footer />
    </ThemeContextUpdate>
  );
}

export default App;
