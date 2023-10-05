import { useContext, useState } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import sun from "../assets/sun.svg";
import moon from "../assets/moon.svg";

export const Navbar = () => {
  const { isDarkMode, setIsDarkMode } = useContext(ThemeContext);
  const [isOppen, setIsOppen] = useState(false);

  return (
    <header
      className={`flex items-center justify-between px-8 h-20 ${
        isDarkMode ? "bg-stone-950 text-white" : "bg-gray-100"
      }`}
    >
      <button onClick={()=> setIsOppen(prev => !prev)} className="p-1 rounded-md block md:hidden">
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
      <div className="font-[Lobster] grow md:grow-0 text-center text-4xl">
        LE
      </div>

      {/* Navbar Desktop */}
      <nav className="hidden md:flex">
        <ul
          className={`flex justify-center items-center gap-4 h-24 [&>li>a]:rounded [&>li>a]:capitalize [&>li>a]:px-4 [&>li>a]:py-2 ${
            isDarkMode
              ? "[&>li>a]:bg-white [&>li>a:hover]:bg-gray-300 text-black"
              : "[&>li>a]:bg-cyan-100 [&>li>a:hover]:bg-cyan-200"
          }`}
        >
          <li>
            <a href="">inico</a>
          </li>
          <li>
            <a href="">experiencia</a>
          </li>
          <li>
            <a href="">sobre mi</a>
          </li>
          <li>
            <a href="">proyectos</a>
          </li>
        </ul>
      </nav>

      {/* Navbar Mobile */}
      <nav className="flex md:hidden">
        <ul
          className={`absolute w-full left-0 mt-10 capitalize text-xl p-4 bg-zinc-900 ${isOppen ? "flex-col z-10" : "hidden"}`}
        >
          <li>
            <a
              className="block p-4 bg-transparent text-white hover:bg-zinc-700 rounded-md"
              href=""
            >
              inico
            </a>
          </li>
          <li>
            <a
              className="block p-4 bg-transparent text-white hover:bg-zinc-700 rounded-md"
              href=""
            >
              experiencia
            </a>
          </li>
          <li>
            <a
              className="block p-4 bg-transparent text-white hover:bg-zinc-700 rounded-md"
              href=""
            >
              sobre mi
            </a>
          </li>
          <li>
            <a
              className="block p-4 bg-transparent text-white hover:bg-zinc-700 rounded-md"
              href=""
            >
              proyectos
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
      {/* <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        ></button>
      </div> */}
    </header>
  );
};
