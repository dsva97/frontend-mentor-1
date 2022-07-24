import { EColors, ICardProps } from "../components";

export const content: ICardProps[] = [
  {
    title: "Sedans",
    excerpt:
      "Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.",
    icon: "/icons/icon-sedans.svg",
    color: EColors.BRIGHT_ORANGE,
  },
  {
    title: "SUVS",
    excerpt:
      "Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.",
    icon: "/icons/icon-suvs.svg",
    color: EColors.DARK_CYAN,
  },
  {
    title: "Luxury",
    excerpt:
      "Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.",
    icon: "/icons/icon-luxury.svg",
    color: EColors.VERY_DARK_CYAN,
  },
];
