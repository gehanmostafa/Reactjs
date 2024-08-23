
import { useLocation } from "react-router-dom";
import { DataImge } from "../Data/data";


const Gallery = () => {
  const location = useLocation();
  const bgColor = location.pathname === "/" ? "bg-maincolor" : "bg-white";
  const textColor = location.pathname === "/" ? "text-white" : "text-maincolor";



  return (
    <>
      <div className={`   ${bgColor}  flex justify-center items-center h-[90vh]`}>
        <div className={`   px-5    flex justify-center items-start `}>
          <h2 className={`${textColor}   mb-3  text-3xl  font-bold `}>
            Gallery
          </h2>
          <div className={` flex justify-center items-center  `}>
            <div className=" grid  gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2">
              {DataImge.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-center "
                >
                  <img
                    src={item.imgUrl}
                    alt={`Image ${item.id}`}
                    className="w-[70%]  rounded-[50%] "
                  />
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