

import Input from "./input";
import Button from "../../../UI/Button";


export default function Message() {
  return (
    <div className="p-5 flex justify-center flex-col items-center">
      <Input type="text" id="name" name="name" />
      <Input type="text" id="phone" name="phone" />
      <Input type="email" id="massage" name="Email" />
      <div className=" flex items-center mb-2">
        <label
          htmlFor="textarea"
          className="text-lg  w-1/3 font-bold   uppercase text-white "
        >
          massage
        </label>
        <textarea
          id="textarea"
          cols="24"
          rows="6"
          className="resize-none
          flex-grow  rounded-lg outline-green-400  "
        ></textarea>
      </div>

      <Button>Submit</Button>
    </div>
  );
}
