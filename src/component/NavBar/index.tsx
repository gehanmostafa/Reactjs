// Importing necessary components from react-router-dom

import logo from "/images/logo.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faGlobe } from "@fortawesome/free-solid-svg-icons";
import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const flexBetween = " flex items-center justify-between ";
  const location = useLocation();
  const bgColor = location.pathname === "/" ? "bg-white" : "bg-maincolor";
  const zTop =
    location.pathname === "/contact" ? "z-20 absolute top-0 " : "";


  const textColor = location.pathname == "/" ? "text-maincolor " : "text-white";
  return (
    <nav
      className={` ${flexBetween} w-full   ${zTop}  font-Inter ${bgColor}  px-4 md:px-2 lg:px-0 `}
    >
      <div className={` ${flexBetween}container mx-auto lg:w-[80%] py-2 `}>
        <div className=" w-[70px] ">
          <img src={logo} alt="logo_cigroup" />
        </div>
        <ul
          className={`${flexBetween} max-sm:hidden   space-x-6 ${textColor}  `}
        >
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/gallery">Gallery</NavLink>
          </li>
          <li>
            <NavLink to="/about">About Us</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Cantact Us</NavLink>
          </li>
        </ul>
        <div className="md:none">
          <FontAwesomeIcon
            icon={faGlobe}
            className="text-xl  hidden md:block"
          />
          <FontAwesomeIcon
            icon={faBars}
            className="text-xl text-maincolor md:hidden"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
