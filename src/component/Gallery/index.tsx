import { Link, useLocation } from "react-router-dom";
import { DataImage } from "../Data/data";

const Gallery = () => {
  const location = useLocation();
  const bgColor = location.pathname === "/" ? "bg-maincolor" : "bg-white";
  const textColor = location.pathname === "/" ? "text-white" : "text-maincolor";

  return (
    <>
      <div
        className={`${bgColor}  flex justify-center items-center min-h-[90vh] pt-11 lg:pt-0 `}
      >
        <div className={` px-5 flex justify-center  `}>
          <h2
            className={`${textColor}  mt-4 mr-3   text-2xl lg:text-3xl   font-bold  `}
          >
            Gallery
          </h2>
          <div className={` flex justify-center items-center  `}>
            <div className=" grid  gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2">
              {DataImage.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-center "
                >
                  <Link to={`/gallery/${item.category}`}>
                    <div className="w-[75%]  h-full rounded-[50%]  m-auto lg:w-full relative group cursor-pointer  ">
                      <img
                        src={item.imgUrl}
                        alt={`Image ${item.id}`}
                        className=" w-[70%]  rounded-[50%] "
                      />
                      <div className="absolute inset-0 flex justify-center text-center    items-center w-[70%] rounded-[50%]  group-hover:bg-[rgba(255,255,255,0.6)] transition-colors duration-150">
                        <div>
                          <span className="relative font-bold opacity-0  group-hover:opacity-100 text-black lg:text-[40px] transition-opacity duration-700 ease-in-out">
                            {item.category}
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
