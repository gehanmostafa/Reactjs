import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";

interface ICall extends React.HTMLAttributes<HTMLDivElement> {
  icon: FontAwesomeIconProps["icon"];
}
export default function Call({ icon }: ICall) {
  return (
    <div className="flex flex-col justify-center items-center    leading-9 text-xl font-bold text-center">
      <FontAwesomeIcon
        icon={icon}
        className="block   w-9 h-14 mb-1 text-white"
      />
      <h4>01222473333 </h4>
      <h4>01113332226</h4>
      <h4> 01001456795</h4>
    </div>
  );
}
