// import { useState } from "react";
// import { Link } from "react-router-dom";
import DropDownMobile from "./DropDownMobile";
import LogoSmall from "../../assets/tradesminLogo_small.png";

// Create an interface for the Navigation
// interface NavigationItem {
//     name: string;
//     href: string;
//     current: boolean;
// }
// const navigation: NavigationItem[] = [
//     { name: "Home", href: "/", current: true },
//     { name: "Daily Job List", href: "/DailyJobList", current: false },
//     { name: "Projects", href: "/Projects", current: false },
//     { name: "Accounts", href: "/Accounts", current: false },
//     { name: "About us", href: "/About", current: false },

// ];

// const classNames = (...classes: string[]) => {
//     return classes.filter(Boolean).join(" ");
//   }

export const Navbar = () => {
  // const [navItems, setNavItems] = useState<NavigationItem[]>(navigation)
  // const handleNavItemClick = (clickedItem: NavigationItem) => {
  //     setNavItems((prevNavItems) =>
  //       prevNavItems.map((item) =>
  //         item.name === clickedItem.name
  //           ? { ...item, current: true }
  //           : { ...item, current: false }
  //       )
  //     );
  //   };

  return (
    <>
      <div className="flex items-center justify-between bg-blue-200 p-2">
        <div>
          <div className="flex items-center junstify-center bg-gray-100 rounded-xl shadow-md h-10 w-12 m-1">
            <a href="/">
            <img className="p-1 " src={LogoSmall} />
            </a>
          </div>
        </div>
        <div>
          <DropDownMobile />
        </div>
      </div>
      {/* <div className="ml-10 flex items-baseline space-x-4 bg-red-500">
                        {navItems.map((item) => (
                              <Link
                              key={item.name}
                              to={item.href}
                              onClick={() => handleNavItemClick(item)}
                              className={classNames(
                                item.current
                                  ? "bg-red"
                                  : "text-black-300 hover:bg-gray-700 hover:text-white",
                                "rounded-md px-3 py-2 text-sm font-medium"
                              )}
                              aria-current={item.current ? "page" : undefined}
                            >
                              {item.name}
                            </Link>
                        ))}
   
    </div> */}
    </>
  );
};
