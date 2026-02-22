"use client";
import { navData } from "../data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import FadeIn from "./FadeIn";

const NavLink = () => {
  const pathname = usePathname();
  return (
    <FadeIn className="z-99 fixed shadow-2xl sm:w-100 w-80 bg-white bottom-5 rounded-full left-1/2 -translate-x-1/2">
      <ul className="flex items-center justify-around p-2">
        {navData.map((item, index) => {
          const isActive = pathname === item.href;
          const Icon = item.icon; // 👈
          const ActiveIcon = item.activeIcon; // 👈
          return (
            <li key={index}>
              <Link
                href={item.href}
                className={`flex flex-col items-center rounded-lg p-1 text-sm font-medium ${isActive ? "bg-variant text-black" : "text-gray-400 hover:bg-variant hover:text-black"}`}
              >
                {isActive ? (
                  <ActiveIcon
                    size={20}
                    className={`w-8 h-8 ${item.checked === false && "text-red-600"}`}
                  />
                ) : (
                  <Icon
                    size={20}
                    className={`${item.checked === false ? "text-red-600" : "text-gray-400"}`}
                  />
                )}

                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </FadeIn>
  );
};

export default NavLink;
