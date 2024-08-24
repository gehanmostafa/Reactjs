import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";

interface IAddress {
  icon: FontAwesomeIconProps["icon"];
}
export default function Address({ icon }: IAddress) {
  return (
    <div className=" leading-9 text-xl font-bold text-center flex flex-col justify-center items-center">
      <FontAwesomeIcon
        icon={icon}
        className="block   w-9 h-14 mb-1  text-white"
      />
      <h4>Head office Zahraa El</h4>
      <h4>Maadi</h4>
      <h4>7th sector</h4>
      <h4> build No: 7/38 </h4>
    </div>
  );
}
