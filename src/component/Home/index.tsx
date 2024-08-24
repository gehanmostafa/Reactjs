import { Link } from "react-router-dom";
import Button from "../../UI/Button";


const Hero = () => {
  const header = " font-semibold lg:text-[80px] ";
  const flexCenter = "flex justify-center items-center flex-col";
  return (
    <>
      <div
        className={` ${flexCenter} bg-heroImage  w-full h-[100vh]  bg-center bg-cover  text-center  `}
      >
        <div className=" md:w-[60%]   ">
          <h1 className={` ${header} lg:leading-[130px]  text-[45px]`}>
            <span className={` text-maincolor  `}>CI group</span>
            is with you from start to finish
          </h1>
          <p className=" md:text-[30px] text-[25px] leading-[54px] font-medium">
            the planing and design must reflect attention to the details that
            will help create a sense of trust and comfort
          </p>
          <div className={`${flexCenter} gap-2 mt-4  md:flex-row`}>
            <Button>
              <Link to={"/about"}>about us</Link>
            </Button>
            <Button>
              <Link to={"/contact"}> contact us</Link>
            </Button>
          </div>
        </div>
      </div>
      <div className={`bg-main  text-center py-2 min-h-36 ${flexCenter}`}>
        <p className=" text-maincolor  container w-[80%]  mx-auto font-semibold text-[24px] capitalize">
          Take a peek at the design we created notice the modern style of clean
          lines and clutter-free designs with neutral tones and natural textures
        </p>
      </div>
    </>
  );
};

export default Hero;
