import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";
import { ReactNode } from "react";

interface IAddress extends React.HTMLAttributes<HTMLDivElement> {
  icon: FontAwesomeIconProps["icon"];
  children: ReactNode;
}
export default function Address({ icon, children  , ...rest}: IAddress) {
  return (
    <div className=" leading-9 text-xl font-bold text-center flex flex-col justify-center items-center">
      <FontAwesomeIcon icon={icon} className="block   w-9 h-14 mb-1 " />
      {children}
    </div>
  );
}
