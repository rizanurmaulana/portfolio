const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="px-4 sm:px-8 md:px-14 lg:px-28 xl:px-44 py-5 transition-300 border-t">
      <p className="text-gray-500 text-xs hover:text-sky-600 transition-300">
        {" "}
        Copyright &copy; {year}{" "}
        <span className="font-medium">Riza Nur Maulana</span> | All right
        reserverd
      </p>
    </footer>
  );
};

export default Footer;
