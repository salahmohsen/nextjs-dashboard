"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MenuLink = ({ item }) => {
  const pathName = usePathname();
  return (
    <Link
      href={item.path}
      className={`flex items-center gap-2 my-2 py-2 px-3 hover:bg-bgSoft hover:rounded-md ease-in-out duration-300 ${
        pathName === item.path ? "bg-bgSoft rounded-md" : null
      }`}
    >
      {item.icon}
      {item.title}
    </Link>
  );
};

export default MenuLink;
