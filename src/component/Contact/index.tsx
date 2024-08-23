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
import Input from "./Massage/input.tsx";
import Button from "../../UI/Button.tsx";
import { useLocation } from "react-router-dom";
import Header from "../Header/index.tsx";



const Contact = () => {
  /*______________State__________*/
  const [show, setShow] = useState<string | null>(null);
  const divRef = useRef<HTMLDivElement | null>(null); 
  const location = useLocation();
  const header = location.pathname==="/" ?null : <Header>Contact Us</Header>
  /*_____________Render__________*/
  const handleClick = (show: string) => {
    setShow(show);
  };
    const handleClickOutside = (event:MouseEvent) => {
      if (divRef.current && !divRef.current.contains(event.target as Node)) {
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
        <div className=" " ref={divRef}>
          <div className="bg-maincolor absolute    w-[40%px] h-[40%px] top-[50%] left-[50%] translate-y-[-50%]  translate-x-[-50%] p-2 rounded-[20px] shadow-xl">
            {show == "call" && (
              <Call icon={faPhone}>
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
              <Message>
                <Input type="text" id="name" name="name" />
                <Input type="number" id="phone" name="phone" />
                <Input type="email" id="massage" name="Email" />
                <div>
                  <label htmlFor="textarea">massage</label>
                  <textarea id="textarea"></textarea>
                </div>

                <Button>Submit</Button>
              </Message>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Contact;
