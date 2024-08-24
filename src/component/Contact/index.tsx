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
  const [show, setShow] = useState<string | null>(null);
 
  const overlayRef = useRef<HTMLDivElement | null>(null); 

  const location = useLocation();
  const header =
    location.pathname === "/" ? null : (
      <Header attr=" absolute top-20 bg-transparent">Contact Us</Header>
    );
  /*_____________Render__________*/
  const handleClick = (show: string) => {
    setShow(show);
  };
    const handleClickOutside = (event:MouseEvent) => {
  
         if (overlayRef.current && !overlayRef.current.contains(event.target as Node)) {
           setShow(""); // إخفاء العنصر عند النقر خارج
         }
    };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside)},
  []);
  return (
    <>
      {header}
      <div className="  flex  w-[100%]  flex-col  pt-4  bg-[#F3F5FA] justify-center items-center gap-14  lg:p-40  lg:flex-row">
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
        <Item
          icon={faMessage}
          children={"Message"}
          onclick={() => handleClick("message")}
        />
      </div>

      {show && (
        <div className="">
          <div className="bg-[#F3F5FA] blur-2xl opacity-60  absolute inset-0 "></div>
          <div
            ref={overlayRef}
            className="bg-maincolor absolute  min-w-[300px] min-h-[33%] top-[50%] left-[50%] translate-y-[-50%]  translate-x-[-50%] rounded-[20px] shadow-xl"
          >
            {show == "call" && (
              <Call
                icon={faPhone}
                className=" leading-9 text-xl font-bold text-center flex flex-col justify-center items-center"
              >
                <h4>01222473333 </h4>
                <h4>01113332226</h4>
                <h4> 01001456795</h4>
              </Call>
            )}

            {show == "address" && (
              <Address icon={faLocationDot}>
                <h4>Head office Zahraa El</h4>
                <h4>Maadi</h4>
                <h4>7th sector</h4>
                <h4> build No: 7/38 </h4>
              </Address>
            )}
            {show == "message" && (
              <Message />
      
              
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Contact;
