import srcImg1 from "/images/footer2.jpg";
import srcImg from "/images/footer.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import {  NavLink } from "react-router-dom";



const  Footer=()=> {
  return (
    <div className="bg-main lg:pt-10   lg:px-5 flex flex-col md:flex-row relative    ">
      <div className="flex gap-8 px-7 ">
        <img
          src={srcImg1}
          alt="imageFooter1"
          className="md:w-[10%]  md:opacity-100  opacity-0"
        />
        <img
          src={srcImg}
          alt="imageFooter2"
          className=" md:w-[10%]  md:opacity-100  opacity-0 "
        />
      </div>

      <div className="flex flex-col  items-center justify-center gap-4  absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <div className=" space-x-4    flex   ">
          <NavLink to="/" className="text-maincolor">
            Home
          </NavLink>
          <NavLink to="/gallery" className="text-maincolor">
            Gallery
          </NavLink>
          <NavLink to="/contact" className="text-maincolor ">
            Contact
          </NavLink>
        </div>

        <div className=" text-center text-maincolor space-x-3  flex ">
          <FontAwesomeIcon
            icon={faFacebook}
            className="cursor-pointer text-2xl  "
          />
          <FontAwesomeIcon
            icon={faInstagram}
            className="cursor-pointer text-2xl"
          />
          <FontAwesomeIcon
            icon={faTwitter}
            className="cursor-pointer text-2xl"
          />
          <FontAwesomeIcon
            icon={faWhatsapp}
            className="cursor-pointer text-2xl"
          />
        </div>
      </div>
    </div>
  );
}

export default Footer
