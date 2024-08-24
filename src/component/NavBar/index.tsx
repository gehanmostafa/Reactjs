// Importing necessary components from react-router-dom

import logo from "/images/logo.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faGlobe, faXmark } from "@fortawesome/free-solid-svg-icons";
import { NavLink, useLocation } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const flexBetween = " flex items-center justify-between ";
  const location = useLocation();
  const bgColor = location.pathname === "/" ? "bg-white" : "bg-maincolor";

  const [isNavVisible, setIsNavVisible] = useState(false);
  const openNavbar = () => {
    setIsNavVisible(true);
  };
  const closeNavbar = () => {
    setIsNavVisible(false);
  };

  const textColor = location.pathname == "/" ? "text-maincolor " : "text-white";
  return (
    <nav
      className={` ${flexBetween} w-full   font-Inter ${bgColor}  px-4 md:px-2 lg:px-0 `}
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
          {/* Navbar content in small Screen */}
          <FontAwesomeIcon
            icon={faBars}
            className="text-xl md:text-maincolor md:hidden cursor-pointer"
            onClick={openNavbar}
          />
          {isNavVisible && (
            <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
              <ul
                className={`bg-maincolor ${flexBetween} flex-col w-3/4 max-w-md p-6 rounded-lg relative`}
              >
                <FontAwesomeIcon
                  icon={faXmark}
                  className="text-2xl text-white cursor-pointer absolute top-4 right-4  transform hover:rotate-90 transition duration-300"
                  onClick={closeNavbar}
                />
                <li className="my-2">
                  <NavLink to="/" className="text-white " onClick={closeNavbar}>
                    Home
                  </NavLink>
                </li>
                <li className="my-2">
                  <NavLink
                    to="/gallery"
                    className="text-white"
                    onClick={closeNavbar}
                  >
                    Gallery
                  </NavLink>
                </li>
                <li className="my-2">
                  <NavLink
                    to="/about"
                    className="text-white"
                    onClick={closeNavbar}
                  >
                    About Us
                  </NavLink>
                </li>
                <li className="my-2">
                  <NavLink
                    to="/contact"
                    className="text-white"
                    onClick={closeNavbar}
                  >
                    Contact Us
                  </NavLink>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
