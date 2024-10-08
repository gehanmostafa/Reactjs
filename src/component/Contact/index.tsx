import { useEffect, useRef, useState } from "react";
import Item from "./item.tsx";
import {
  faLocationDot,
  faMessage,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import Call from "./Call.tsx";
import Address from "./Address.tsx";

import Message from "./Massage";

import { useLocation } from "react-router-dom";
import Header from "../Header/index.tsx";

const Contact = () => {
  /*______________State__________*/
  const location = useLocation();
  const header =
    location.pathname === "/" ? null : (
      <Header attr=" absolute top-20 bg-transparent">Contact Us</Header>
    );
  const [show, setShow] = useState<string | null>(null);

  const overlayRef = useRef<HTMLDivElement | null>(null);

  /*_____________Render__________*/
  const handleClick = (show: string) => {
    setShow(show);
  };
  const handleClickOutside = (event: MouseEvent) => {
    if (
      overlayRef.current &&
      !overlayRef.current.contains(event.target as Node)
    ) {
      setShow("");
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
  }, []);
  return (
    <>
      {header}
      <div className=" flex justify-center items-center  w-[100%] h-[76vh]   bg-[#F3F5FA]   sm:pt-4 ">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 pt-10 ">
          <Item
            icon={faPhone}
            children={"call"}
            onclick={() => handleClick("call")}
          />
          <Item
            icon={faLocationDot}
            children={"Address"}
            onclick={() => handleClick("address")}
          />
          <div className="col-span-2 md:col-span-1 flex justify-center">
            <Item
              icon={faMessage}
              children={"Message"}
              onclick={() => handleClick("message")}
            />
          </div>
        </div>
      </div>

      {show && (
        <div>
          <div className="bg-[#F3F5FA] blur-2xl opacity-60  absolute inset-0 "></div>
          <div
            ref={overlayRef}
            className="bg-maincolor absolute  min-w-[300px] min-h-[33%] top-[50%] left-[50%] translate-y-[-50%]  translate-x-[-50%] rounded-[20px] shadow-xl"
          >
            {show == "call" && <Call icon={faPhone} />}
            {show == "address" && <Address icon={faLocationDot} />}
            {show == "message" && <Message />}
          </div>
        </div>
      )}
    </>
  );
};

export default Contact;
