import Logo from "../assets/tradesminLogo_v2.png";

export const Home = () => {
  return (
    <div className="flex h-max bg-blue-100">
      <div className="bg-blue-200 m-8 sm:p-8 shadow m-8 rounded-xl">
        <div className="flex items-center justify-center m-8">
          <img className="rounded-xl m-8" src={Logo} alt="logo" />
        </div>
        <div className="m-8 p-8 flex items-center justify-center flex-col text-gray-800">
        Built for mobile.
         
        </div>
      </div>
    </div>
  );
};