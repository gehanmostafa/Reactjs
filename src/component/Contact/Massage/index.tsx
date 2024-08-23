
import { ReactNode } from "react";

interface IMessage {
  
  children: ReactNode;
}
export default function Message({children }: IMessage) {
  return (
    <div>

      {children}
    </div>
  );
}
