import srcImg1 from "/images/footer2.jpg";
import srcImg from "/images/footer.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter, faWhatsapp } from "@fortawesome/free-brands-svg-icons";


const  Footer=()=> {
  return (
    <div className="bg-main h-[50%]  pt-20 pb-5  px-5 flex justify-center items-center">
      <div className="flex gap-8 px-7  ">
         <img src={srcImg1} alt="imageFooter" className="w-[10%]"/>
        <img src={srcImg} alt="imageFooter" className="w-[10%]" />
       
      </div>
      <div className="container  w-[40%] m-auto   text-center text-maincolor  space-x-3  ">
        <FontAwesomeIcon icon={faFacebook} className=" cursor-pointer"  />
        <FontAwesomeIcon icon={faInstagram}  className=" cursor-pointer" />
        <FontAwesomeIcon icon={faTwitter}  className=" cursor-pointer" />
        <FontAwesomeIcon icon={faWhatsapp}  className=" cursor-pointer" />
      </div>
    </div>
  )
}

export default Footer
