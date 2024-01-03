"use client";

import { usePathname } from "next/navigation";
import {
  MdOutlineChat,
  MdOutlineEditNotifications,
  MdPublic,
  MdSearch,
} from "react-icons/md";

const Navbar = () => {
  const pathName = usePathname();
  return (
    <div className="flex bg-bgSoft rounded-lg p-3 items-center justify-between shadow-sm ">
      <div className="capitalize font-bold">{pathName.split("/").pop()}</div>
      <div className="flex items-center gap-5">
        <div className="bg-bg rounded-lg flex items-center p-1 gap-1">
          <MdSearch />
          <input
            placeholder="Search..."
            className="bg-transparent focus:outline-0 text-textSoft w-36 text-sm"
          />
        </div>
        <MdOutlineChat size={20} />
        <MdOutlineEditNotifications size={20} />
        <MdPublic size={20} />
      </div>
    </div>
  );
};

export default Navbar;
