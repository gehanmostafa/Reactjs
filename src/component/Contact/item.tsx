import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";
import { ReactNode } from "react";

interface IContact extends React.HTMLAttributes<HTMLDivElement> {
  icon: FontAwesomeIconProps["icon"];
  children: ReactNode;
  onclick: () => void;
  attr?: string;
}
export default function Item({ icon, children, onclick, attr }: IContact) {
  return (
    <>
      <div
        onClick={onclick}
        className={`w-[100px] h-[100px] cursor-pointer ${attr}  bg-white shadow-md  p-16 flex  flex-col justify-center items-center rounded-[50%] text-center `}
      >
        <FontAwesomeIcon icon={icon} className="block  w-6 h-6 mb-1" />
        <h2 className="text-lg  font-bold  text-maincolor ">{children}</h2>
      </div>
    </>
  );
}
