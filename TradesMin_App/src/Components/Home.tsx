
import logo from "../assets/tradesminLogo.png";

export const Home = () => {
  return (
    <div className="homePage">
      <div className="flex direction-col bg-red-200">
        <div className="homePageMenuImg">
          <img className="" src={logo} alt="logo" />
        </div>
        <div className="homePageMenu">
          <button className="menuButton">Daily job list</button>
          <button className="menuButton">Projects</button>
          <button className="menuButton">Calendar</button>
          <button className="menuButton">Accounts</button>
        </div>
      </div>
    </div>
  );
};
