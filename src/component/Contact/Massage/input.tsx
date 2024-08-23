
interface IInput {

    type: string;
  id: string;
  name: string;



 }
 function Input({type , id , name } :IInput) {
  return (
    <div className="flex pb-4 ">
      <label
        htmlFor={id}
        className="text-lg font-bold  w-1/3 uppercase text-white pr-6"
      >
        {name}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        className="border  flex-grow  rounded-lg   outline-green-400 "
      />
    </div>
  );
}
export default Input