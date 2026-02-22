import { IconType } from "react-icons/lib";

export type Navtype = {
  title: string;
  href: string;
  icon: IconType;
  activeIcon: IconType;
  alt: string;
  checked?: boolean;
};
