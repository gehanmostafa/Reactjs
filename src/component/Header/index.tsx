import { ReactNode } from "react"

interface IHeader{
    children: ReactNode;
}


export default function Header( {children} : IHeader) {
  return (
      <div className="w-[100%]">
          <h1 className="py-4 container w-[80%] m-auto text-maincolor font-bold text-3xl">{children}</h1>
    </div>
  )
}
