

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DataInteriorDesign } from "../../Data/data";
import Header from "../../Header";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
export default function IntroDesign() {
  const header =
    location.pathname === "/" ? null : (
      <Header attr="text-center lg:text-start">
        Gallery
        <div className="inline-block ">
          <FontAwesomeIcon icon={faArrowRight} className="px-3 fa-beat-fade" />
          <span className="text-black">Intro Design</span>
        </div>
      </Header>
    );
  return (
    <>
      {header}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 container w-[80%] m-auto gap-11 lg:pt-[2.4rem] pb-[3rem]">
        {DataInteriorDesign.map((item, index) => (
          <div key={index}>
            <img
              src={item.imgUrl}
              alt={`door${item.id}`}
              className="w-full  cursor-pointer hover:scale-[1.03] transition-transform duration-700 linear "
            />
          </div>
        ))}
      </div>
    </>
  );
}