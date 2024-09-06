import { Link } from "react-scroll";
import Nav from "./Nav";

const Logo = () => (
  <Link
    to="#home"
    spy={true}
    smooth={true}
    duration={500}
    className="flex items-center gap-3 cursor-pointer"
  >
    <span className="bg-gradient-to-tl from-sky-500 to-sky-600 text-white h-9 w-9 flex justify-center items-center rounded shadow-lg text-xl font-medium">
      R
    </span>
    <h1 className={`text-xl font-semibold text-gray-800`}>Riza</h1>
  </Link>
);

const Header = () => {
  return (
    <header className="w-full shadow-sm fixed top-0 left-0 z-10">
      <div className="flex justify-between items-center px-4 sm:px-8 md:px-14 lg:px-28 xl:px-44 h-[80px] transition-300 bg-white">
        <Logo />
        <Nav />
      </div>
    </header>
  );
};

export default Header;
