import { HTMLAttributes, ReactNode } from "react";

interface IHeader extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  attr?: string;
}

export default function Header({ children, attr }: IHeader) {
  return (
    <div className={`w-[100%] ${attr} bg-[#ffffff]`}>
      <h1 className="  py-6 container w-[80%] m-auto text-maincolor font-bold text-3xl ">
        {children}
      </h1>
    </div>
  );
}
