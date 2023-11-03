import React from 'react'
import {GoHomeFill} from "react-icons/go"
import {MdOutlineSubscriptions} from "react-icons/md"
import {BsFire} from "react-icons/bs"
import {ImNewspaper} from "react-icons/im"
import {TbLivePhoto} from "react-icons/tb"
import { GiTrophyCup } from "react-icons/gi";
import {IoMusicalNoteOutline} from "react-icons/io5"
import {IoMdBulb} from "react-icons/io"
import {SiGradleplaypublisher} from "react-icons/si"
import { useSelector } from 'react-redux';
import SidebarCollapsed from './SidebarCollapsed'
import {Link} from "react-router-dom"

const Sidebar = () => {

  const isMenuOpen = useSelector(store => store.app.isMenuOpen);


  if(!isMenuOpen){
    // return <SidebarCollapsed/>
    return;
  };

  return (
    <div className="z-10 absolute top-16 left-0 bg-neutral-950 w-full h-screen sm:h-auto sm:static sm:w-48 lg:w-72 sm:px-4 lg:px-6">
      {/* General section */}
      <section className="border-b-2 border-b-neutral-900 my-2">
        <ul>
          <li>
            <Link
              to="/"
              className="w-44 mx-auto sm:w-auto flex items-center gap-6 p-2 rounded-lg hover:bg-neutral-800"
            >
              <span className="text-xl">
                <GoHomeFill />
              </span>
              <span>Home</span>
            </Link>
          </li>
          <li className="w-44 mx-auto sm:w-auto flex items-center gap-6 p-2 rounded-lg hover:bg-neutral-800">
            <span className='text-xl'>
              <SiGradleplaypublisher />
            </span>
            <span>Shorts</span>
          </li>
          <li className="w-44 mx-auto sm:w-auto flex items-center gap-6 p-2 rounded-lg hover:bg-neutral-800">
            <span className="text-xl">
              <MdOutlineSubscriptions />
            </span>
            <span>Subscriptions</span>
          </li>
        </ul>
      </section>

      {/* Explore section */}
      <section className="border-b-2 border-b-neutral-900 my-2">
        <h1 className="text-center sm:text-start my-4">Explore</h1>
        <ul>
          <li className="w-44 mx-auto sm:w-auto flex items-center gap-6 p-2 rounded-lg hover:bg-neutral-800">
            <span className="text-xl">
              <BsFire />
            </span>
            <span>Trending</span>
          </li>
          <li className="w-44 mx-auto sm:w-auto flex items-center gap-6 p-2 rounded-lg hover:bg-neutral-800">
            <span className="text-xl">
              <ImNewspaper />
            </span>
            <span>News</span>
          </li>
          <li className="w-44 mx-auto sm:w-auto flex items-center gap-6 p-2 rounded-lg hover:bg-neutral-800">
            <span className="text-xl">
              <TbLivePhoto />
            </span>
            <span>Live</span>
          </li>
          <li className="w-44 mx-auto sm:w-auto flex items-center gap-6 p-2 rounded-lg hover:bg-neutral-800">
            <span className="text-xl">
              <GiTrophyCup />
            </span>
            <span>Sport</span>
          </li>
          <li className="w-44 mx-auto sm:w-auto flex items-center gap-6 p-2 rounded-lg hover:bg-neutral-800">
            <span className="text-xl">
              <IoMusicalNoteOutline />
            </span>
            <span>Music</span>
          </li>
          <li className="w-44 mx-auto sm:w-auto flex items-center gap-6 p-2 rounded-lg hover:bg-neutral-800">
            <span className="text-xl">
              <IoMdBulb />
            </span>
            <span>Learning</span>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default Sidebar