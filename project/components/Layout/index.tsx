import { ReactNode } from "react";
import classes from "./style.module.css";

export interface ILayoutProps {
  children: ReactNode;
}
export const Layout = ({ children }: ILayoutProps) => {
  return (
    <div className={classes.container}>
      <main className={classes.main}>{children}</main>
    </div>
  );
};
