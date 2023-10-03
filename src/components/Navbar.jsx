import { Link } from "react-router-dom";

export const Navbar = () => (
  <header className="bg-gray-200">
    <nav>
      <ul className="flex justify-center items-center gap-4 h-24 [&>li>a:hover]:bg-cyan-100 [&>li>a]:p-2 [&>li>a]:rounded [&>li>a]:capitalize">
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
  </header>
);
