import React from "react";
import { MdSupervisedUserCircle } from "react-icons/md";

function Card() {
  return (
    <div className="flex gap-3 bg-bgSoft p-5 rounded-lg shadow-sm cursor-pointer w-full hover:shadow-lg duration-300 ease-in-out">
      <MdSupervisedUserCircle size={24} />
      <div className="flex flex-col gap-2">
        <span>Total Users</span>
        <span className="text-xl">10.273</span>
        <span className="text-sm">
          <span className="text-[green]">12%</span> more than precentage
        </span>
      </div>
    </div>
  );
}

export default Card;
