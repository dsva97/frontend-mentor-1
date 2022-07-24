import { Button } from "../Button";
import classes from "./style.module.css";

export enum EColors {
  BRIGHT_ORANGE = "bright-orange",
  DARK_CYAN = "dark-cyan",
  VERY_DARK_CYAN = "very-dark-cyan",
}

export interface ICardProps {
  title: string;
  icon: string;
  excerpt: string;
  color: EColors;
}
export const Card = (
  { title, icon, excerpt, color }: ICardProps,
  key: number
) => {
  return (
    <article className={`${classes.container} ${classes[color]}`} key={key}>
      <img className={classes.icon} src={icon} alt={title} />
      <h1 className={classes.title}>{title}</h1>
      <p className={classes.excerpt}>{excerpt}</p>
      <Button className={classes.button}>Learn More</Button>
    </article>
  );
};
