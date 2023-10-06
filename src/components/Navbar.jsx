import { useContext, useState } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import sun from "../assets/sun.svg";
import moon from "../assets/moon.svg";

export const Navbar = () => {
  const { isDarkMode, setIsDarkMode } = useContext(ThemeContext);
  const [isOppen, setIsOppen] = useState(false);

  return (
    <header
      className={`fixed z-10 flex items-center justify-between px-8 w-full  h-20 capitalize ${
        isDarkMode ? "bg-stone-950 text-white" : "bg-gray-100"
      }`}
    >
      <button
        onClick={() => setIsOppen((prev) => !prev)}
        className="p-1 rounded-md block md:hidden"
      >
        <svg
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 17 14"
          className="h-8 w-8"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>
      <a className="grow md:grow-0" href="#home">
        <div className="font-[Lobster] text-center text-4xl">
          LE
        </div>
      </a>

      {/* Navbar Desktop */}
      <nav className="hidden md:flex">
        <ul
          className={`flex justify-center items-center gap-4 h-24 ${
            isDarkMode
              ? "[&>li>a]:border-b [&>li>a]:border-white [&>li>a]:p-1 [&>li>a:hover]:border-neutral-600"
              : "[&>li>a]:border-b [&>li>a]:border-black"
          }`}
        >
          <li>
            <a href="#home">inico</a>
          </li>
          <li>
            <a href="#skills">tecnologias</a>
          </li>
          <li>
            <a href="#projects">proyectos</a>
          </li>
          <li>
            <a href="#about-me">sobre mi</a>
          </li>
          <li>
            <a href="#contact-me">contactame</a>
          </li>
        </ul>
      </nav>

      {/* Navbar Mobile */}
      <nav className="flex md:hidden">
        <ul
          className={`absolute w-full left-0 mt-10 text-xl p-4 bg-zinc-900 ${
            isOppen ? "flex-col z-10" : "hidden"
          }`}
        >
          <li>
            <a
              className="block p-4 bg-transparent text-white hover:bg-zinc-700 rounded-md"
              href="#home"
            >
              inico
            </a>
          </li>
          <li>
            <a
              className="block p-4 bg-transparent text-white hover:bg-zinc-700 rounded-md"
              href="#skills"
            >
              tecnologias
            </a>
          </li>
          <li>
            <a
              className="block p-4 bg-transparent text-white hover:bg-zinc-700 rounded-md"
              href="#projects"
            >
              proyectos
            </a>
          </li>
          <li>
            <a
              className="block p-4 bg-transparent text-white hover:bg-zinc-700 rounded-md"
              href="#about-me"
            >
              sobre mi
            </a>
          </li>
          <li>
            <a
              className="block p-4 bg-transparent text-white hover:bg-zinc-700 rounded-md"
              href="#contact-me"
            >
              contactame
            </a>
          </li>
        </ul>
      </nav>
      <button
        onClick={() => setIsDarkMode((prev) => !prev)}
        className="rounded bg-neutral-900 p-2 rounded-full"
      >
        {isDarkMode ? (
          <img className="w-7 h-7" src={sun} alt="Sun" />
        ) : (
          <img className="w-7 h-7" src={moon} alt="Moon" />
        )}
      </button>
    </header>
  );
};
