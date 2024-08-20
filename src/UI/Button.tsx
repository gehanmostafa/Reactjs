import { ButtonHTMLAttributes , ReactNode } from "react"
interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode,
 
}
const Button=({children , ...rest} :IProps)=> {
  return (
    <>
      <button className='bg-bgBtn w-[200px] py-1 lg:py-2 shadow text-white rounded-[30px] hover:bg-hoverbgColor  transition-all ease-in duration-300  active:p-1' {...rest}>{children}</button>
    </>
  );
}

export default Button