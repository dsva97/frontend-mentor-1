import { HTMLAttributes, ReactNode } from "react";
import classes from "./style.module.css";

export interface IButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}
export const Button = ({ children, className, ...props }: IButtonProps) => {
  return (
    <button className={`${classes.button} ${className}`} {...props}>
      {children}
    </button>
  );
};
