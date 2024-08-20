// Importing necessary components from react-router-dom

import logo from "../../assets/images/logo.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faGlobe } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const flexBetween = " flex items-center justify-between ";
  return (
    <nav
      className={` ${flexBetween} w-full   font-Inter bg-white fixed top-0 z-20  px-4 md:px-2 lg:px-0 `}
    >
      <div className={` ${flexBetween}container mx-auto lg:w-[80%] py-2 `}>
        <div className=" w-[70px] ">
          <img src={logo} alt="logo_cigroup" className="" />
        </div>
        <ul className={`${flexBetween} max-sm:hidden   space-x-6 text-maincolor  `}>
          <li>
            <NavLink to="/" >Home</NavLink>
          </li>
          <li>
            <NavLink to="/gallery">Gallery</NavLink>
          </li>
          <li>
            <NavLink to="/about">About Us</NavLink>
          </li>
          <li>
            <NavLink to="/contact"  
          
          >Cantact Us</NavLink>
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
