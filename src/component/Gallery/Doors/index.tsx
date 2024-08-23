import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DataDoors } from "../../Data/data";
import Header from "../../Header";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
export default function Doors() {
  const header =
    location.pathname === "/" ? null : (
      <Header attr="text-center lg:text-start">
        Gallery
        <div className="inline-block ">
          <FontAwesomeIcon icon={faArrowRight} className="px-3 " />
          <span className="text-black">Doors</span>
        </div>
      </Header>
    );
  return (
    <>
      {header}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 container w-[80%] m-auto gap-11 lg:pt-[2.4rem] pb-[3rem]">
        {DataDoors.map((item, index) => (
          <div key={index}>
            <img src={item.imgUrl} alt={`door${item.id}`} className="w-full" />
          </div>
        ))}
      </div>
    </>
  );
}
