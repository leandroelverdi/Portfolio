import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { ThemeContextUpdate } from "./contexts/ThemeContext";

function App() {
  return (
    <ThemeContextUpdate>
      <Navbar />
      <main>
        <section className="relative flex justify-center items-center">
          <div className="absolute flex flex-col text-center gap-4">
            <h1 className="text-white text-7xl capitalize">leandro elverdi</h1>
            <p className="text-white text-5xl capitalize">desarrollador web</p>
          </div>
          <img
            className="h-screen w-full object-cover"
            src="./images/hero-image.jpg"
            alt="Banner"
          />
        </section>
        <section className="m-10">
          <h2 className="text-7xl text-center"></h2>
          <div className="container mx-auto px-6 py-3 bg-gray-500 rounded-md">
            <p className="text-xl">
              Hola, soy un apasionado por la web que lleva mas de un año
              formandoce con diferentes tecnologias
            </p>

          </div>
        </section>

        <section>
          <div></div>
        </section>
      </main>
      <Footer />
    </ThemeContextUpdate>
  );
}

export default App;
