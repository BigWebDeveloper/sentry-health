import { Navtype } from "./type";
import { IoHomeOutline } from "react-icons/io5";
import { IoHomeSharp } from "react-icons/io5";
import { IoIosHeart } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";

export const navData: Navtype[] = [
  {
    title: "Home",
    href: "/",
    icon: IoHomeOutline,
    activeIcon: IoHomeSharp,
    alt: "Home Icon",
  },
  {
    title: "Tool",
    href: "/tool",
    icon: IoIosHeart,
    activeIcon: IoIosHeart,
    checked: false,

    alt: "Tool Icon",
  },
  {
    title: "Profile",
    href: "/profile",
    icon: FaRegUserCircle,
    activeIcon: FaUserCircle,
    alt: "Profile Icon",
  },
];
