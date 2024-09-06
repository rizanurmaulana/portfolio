import { Link } from "react-scroll";
import { FaBars, FaBarsStaggered } from "react-icons/fa6";
import { useState } from "react";

const navLinks = [
  { name: "Home", path: "#home" },
  { name: "About", path: "#about" },
  { name: "Project", path: "#project" },
  { name: "Service", path: "#service" },
  { name: "Contact", path: "#contact" },
];

const NavLinkItem = ({ name, path }) => (
  <li className="my-8 md:my-0 cursor-pointer">
    <Link
      to={path}
      spy={true}
      smooth={true}
      duration={500}
      className="text-gray-600 drop-shadow-2xl hover:text-sky-600 transition-300"
    >
      {name}
    </Link>
  </li>
);

const Nav = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);

  return (
    <div>
      <div
        className="text-2xl cursor-pointer absolute top-8 right-4 md:hidden"
        onClick={toggleMenu}
      >
        {open ? <FaBarsStaggered /> : <FaBars />}
      </div>
      <nav>
        <ul
          className={`md:flex md:items-center gap-10 absolute md:static -z-10 md:z-auto md:top-0 left-0 bg-white md:bg-transparent h-auto w-full px-10 md:px-0 transition-500 ${
            open ? "top-[80px]" : "-top-96"
          }`}
        >
          {navLinks.map((nav) => (
            <NavLinkItem key={nav.name} name={nav.name} path={nav.path} />
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
