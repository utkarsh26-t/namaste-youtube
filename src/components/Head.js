import React from 'react'
import {RxHamburgerMenu} from "react-icons/rx"
import {AiOutlineSearch} from "react-icons/ai"
import { BiUserCircle, BiVideoPlus } from "react-icons/bi";
import {IoIosNotificationsOutline} from "react-icons/io"
import ytLogo from "../assets/img/ytLogo.png"
import ytLogoMobile from "../assets/img/ytLogoMobile.png"
import { useDispatch } from 'react-redux';
import {toggleMenu} from "../utils/appSlice";

const Head = () => {

  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  }


  return (
    <div className="bg-black p-2 grid grid-cols-6">
      {/* Logo & hamburger section */}
      <div className="flex gap-6 items-center">
        <span
          onClick={() => toggleMenuHandler()}
          className="text-xl cursor-pointer rounded-full hover:bg-neutral-800 p-2"
        >
          <RxHamburgerMenu />
        </span>
        <span>
          <img src={ytLogo} alt="Youtube" className="h-5 hidden sm:block" />
          <img src={ytLogoMobile} alt="Youtube" className="h-5 sm:hidden" />
        </span>
      </div>

      {/* Search section */}
      <div className="col-span-4 flex justify-center">
        <input
          type="text"
          className="w-1/2 rounded-l-full py-2 px-4 focus:outline-none border-2 border-neutral-900 bg-black"
        />
        <button className="rounded-r-full px-4 text-xl bg-neutral-900 border-2 border-neutral-900">
          <AiOutlineSearch />
        </button>
      </div>

      {/* Nav icons */}
      <div className="flex gap-2 sm:gap-6 items-center text-2xl justify-end">
        <span className="rounded-full hover:bg-neutral-800 p-2 cursor-pointer">
          <BiVideoPlus />
        </span>
        <span className="rounded-full hover:bg-neutral-800 p-2 cursor-pointer">
          <IoIosNotificationsOutline />
        </span>
        <span className="rounded-full hover:bg-neutral-800 p-2 cursor-pointer">
          <BiUserCircle />
        </span>
      </div>
    </div>
  );
}

export default Head