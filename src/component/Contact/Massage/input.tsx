
interface IInput {

    type: string;
  id: string;
  name: string;



 }
 function Input({type , id , name } :IInput) {
  return (
    <div>
      <div>
        <label htmlFor={id} className="text-lg font-bold">{name}</label>
        <input type={type} id={id} name={name} className="border" />
      </div>
    </div>
  );
}
export default Input