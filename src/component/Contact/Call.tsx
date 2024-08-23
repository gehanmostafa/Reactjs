import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";
import { ReactNode } from "react";

interface ICall extends React.HTMLAttributes<HTMLDivElement> {
  icon: FontAwesomeIconProps["icon"];
  children: ReactNode;
 
}
export default function Call({ icon, children , ...rest }: ICall) {
  return (
    <div className="flex flex-col justify-center items-center  " {...rest}>
      <FontAwesomeIcon icon={icon} className="block   w-9 h-14 mb-1 text-white" />
      {children}
    </div>
  );
}
