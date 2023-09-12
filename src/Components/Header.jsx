import React, { useState } from "react";
import logo from "../assets/Images/logo.png";
import {
  HiHome,
  HiMagnifyingGlass,
  HiStar,
  HiPlayCircle,
  HiTv,
} from "react-icons/hi2";
import { HiPlus, HiDotsVertical } from "react-icons/hi";
import HeaderItem from "./HeaderItem";

function Header() {
  const [toggle, setToggle] = useState(false);
  const menu = [
    {
      name: "HOME",
      icon: HiHome,
    },
    {
      name: "SEARCH",
      icon: HiMagnifyingGlass,
    },
    {
      name: "WATCH LIST",
      icon: HiPlus,
    },
    {
      name: "ORIGINALS",
      icon: HiStar,
    },
    {
      name: "MOVIES",
      icon: HiPlayCircle,
    },
    {
      name: "SERIES",
      icon: HiTv,
    },
  ];
  return (
    <div className="flex items-center  justify-between p-5 w-full">
      <div className="flex gap-8 items-center">
        <img src={logo} className="w-[80px] md:w-[115px] object-cover" />
        <div className="hidden md:flex  gap-8">
          {menu.map((e) => (
            <HeaderItem key={e.name} name={e.name} Icon={e.icon} />
          ))}
        </div>
      </div>

      <div className="flex md:hidden gap-5">
        {menu.map(
          (e, index) =>
            index < 3 && <HeaderItem key={e.name} name={""} Icon={e.icon} />
        )}
        <div className="md:hidden" onClick={() => setToggle(!toggle)}>
          <HeaderItem name={""} Icon={HiDotsVertical} />
          {toggle && (
            <div>
              {" "}
              <div
                className="absolute mt-3 bg-[#121212] border-[1px]  border-gray-700
            px-5 rounded-sm p-3 py-4"
              >
                {menu.map(
                  (e, index) =>
                    index > 2 && (
                      <HeaderItem key={e.name} name={e.name} Icon={e.icon} />
                    )
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      <img
        src="https://emi9d8rzue7.exactdn.com/wp-content/uploads/2021/06/Luca-Profile-Avatars-3.png?strip=all&lossy=1&ssl=1"
        className="w-[40px] rounded-full"
      />
    </div>
  );
}

export default Header;
