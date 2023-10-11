import Logo from "../assets/tradesminLogo_v2.png";

const Home = () => {
  
  return (
    <div className="flex min-h-full bg-blue-100">
      <div className="bg-gradient-to-t from-blue-400 via-pink-100 to-blue-300 m-8 sm:p-8 shadow m-8 rounded-xl shadow-xl">
        <div className="flex items-center justify-center m-8">
          <img className="rounded-xl m-8 shadow" src={Logo} alt="logo" />
        </div>
        <div className="m-8 p-8 flex items-center justify-center flex-col text-gray-800">
        Built for mobile.
         
        </div>
      </div>
    </div>
  );
};

export default Home