const Header = () => {
  return (
    <div className="flex p-4 m-auto w-fit">
      <img className="w-20 md:w-32" src="./react-logo.png"></img>
      <div className="flex flex-col justify-center">
        <h1 className="text-4xl md:text-6xl text-transparent font-semibold font-sans bg-gradient-to-r from-cyan-500 to-sky-700 bg-clip-text">
          The React Quiz
        </h1>
      </div>
    </div>
  );
};

export default Header;
