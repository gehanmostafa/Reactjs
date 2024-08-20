import { DataImge } from "../Data/data";

const Gallery = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen m-12 ">
      <h2 className="text-maincolor  mb-3  text-xl  font-semibold" >Gallery</h2>
      <div className=" grid  gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2">
        {DataImge.map((item) => (
            <div key={item.id} className="flex items-center justify-center">
            <img src={item.imgUrl} alt={`Image ${item.id}`} className="w-[80%]" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;